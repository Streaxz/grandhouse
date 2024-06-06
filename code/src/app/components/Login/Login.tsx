"use client";
import {Button, Form, Input, message} from "antd";
import React from "react";
import {FileMarkdownOutlined, LockOutlined} from "@ant-design/icons";
import axios from "axios";

export interface ILoginProps {
	setJwt: (jwt: string) => void;
}
export const Login = ({setJwt}: ILoginProps) => {
	const onFinish = async (values: any) => {
		try {
			console.log(process.env.NEXT_PUBLIC_API_URL);
			const {data} = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
				{
					publicKey: values.email,
					privateKey: values.password
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				})
			localStorage.setItem('jwt', data.accessToken);
			setJwt(data.accessToken);
			localStorage.setItem('refreshToken', data.refreshToken);
		} catch (e) {
			console.log(e);
			message.error('Неверная почта или пароль!');
		}
	}

	return (
		<div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name="email"
						rules={[
							{
								type: 'email',
								message: 'Введите коррекнтый E-mail!',
							},
							{
								required: true,
								message: 'Введите E-mail!',
							},
						]}
					>
						<Input prefix={<FileMarkdownOutlined className="site-form-item-icon" />} placeholder="E-mail" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Введите пароль!'}
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Пароль"
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Войти
						</Button>

					</Form.Item>
				</Form>
</div>
	)
}