import {Button, Card, Form, Input, Table, Typography} from "antd";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {IInformationCard} from "@/app/types/IInformationCard";
import {useDescription} from "@/app/hooks/useDescription";
import TextArea from "antd/es/input/TextArea";

export interface IDescriptionTableProps {
	descriptions?: IInformationCard[];
	getProjects: () => void;
	projectId?: number,
}

export interface Item extends IInformationCard{
	key: string;
}

enum InputType {
	TITLE = 'title',
	DESCRIPTION = 'description',
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	setDescription: (value: string) => void,
	setTitle: (value: string) => void,
	title: any;
	record: Item;
	inputType: InputType;
	index: number;
	children: React.ReactNode;
}

export const DescriptionTable =  ({
																		descriptions,
																		getProjects,
																		projectId,
																	} : IDescriptionTableProps) => {
	const [editingKey, setEditingKey] = useState('');
	const [title, setTitle] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [updatedTitle, setUpdatedTitle] = useState<string>();
	const [updatedDescription, setUpdatedDescription] = useState<string>();
	const {
		updateDescription,
		deleteDescription,
		createDescription,
	}= useDescription(getProjects);

	const edit = (record: Partial<Item> & { key: React.Key }) => {
		setEditingKey(record.key);
		setUpdatedTitle(record.title);
		setUpdatedDescription(record.description)
	};

	const cancel = () => {
		setEditingKey('');
		setUpdatedTitle(undefined);
		setUpdatedDescription(undefined)
	};

	const isEditing = (record: Item) => record.key === editingKey;
	const EditableCell: React.FC<EditableCellProps> = ({
																											 editing,
																											 dataIndex,
																											 title,
																											 inputType,
																											 record,
																											 index,
																											 children,
																											 ...restProps
																										 }) => {

		const inputRef = useRef<HTMLInputElement>(null);

		useEffect(() => {
			if (editing && inputRef.current) {
				inputRef.current.focus();
			}
		}, [editing]);


		const InputNode = useMemo(() => {
			switch (inputType) {
				case InputType.TITLE:
					return (
						<Input
							key={'updateTitle'}
							defaultValue={updatedTitle}
							style={{width: "200px"}}
							onChange={(e) => {setUpdatedTitle(e.target.value)}}
						/>
					);
				case InputType.DESCRIPTION:
					return (
						<Input
							key={'updateDescription'}
							value={updatedDescription}
							onChange={(e) => {setUpdatedDescription(e.target.value)}}
						/>
					);
				default:
					return <Input />;
			}
		}, [inputType, record, updatedTitle, updatedDescription ]);

		return (
			<td {...restProps}>
				{editing ? InputNode : children}
			</td>
		);
	};



	const columns = [
		{
			title: 'Название',
			dataIndex: 'title',
			width: '25%',
			editable: true,
			render: (_: any, record: Item) => {
				return (
					<Typography.Text>
						{record.title}
					</Typography.Text>
				);
			}
		},
		{
			title: 'Описание',
			dataIndex: 'description',
			width: '25%',
			editable: true,
			render: (_: any, record: Item) => {
				return (
					<Typography.Text>
						{record.description}
					</Typography.Text>
				);
			}
		},
		{
			title: 'Операции',
			dataIndex: 'operation',
			width: "20%",
			editable: false,
			render: (_: any, record: Item) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
            <Typography.Link onClick={() => update(record.id)} style={{marginRight: 8}}>
								Сохранить
            </Typography.Link>
            <Typography.Link onClick={cancel}>
              <a>Отменить</a>
            </Typography.Link>
          </span>
				) : (
					<>
						<Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}
														 style={{marginRight: 8}}>
							Изменить
						</Typography.Link>

						<Typography.Link onClick={() => deleteDescription(record.id)}>
							Удалить
						</Typography.Link>
					</>
				)
			}
		},
	]


	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: Item) => ({
				record,
				inputType: col.dataIndex,
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});

	const save = async () => {
		if (title && description && projectId) {
			await createDescription({
				title,
				description,
				projectId: projectId
			});
			setTitle(undefined);
			setDescription(undefined);
		}
	};

	const update = async (id: number) => {
		await updateDescription({
			title: updatedTitle || '',
			description: updatedDescription || '',
			id
		});
		setEditingKey('')
	};
	console.log(updatedTitle, updatedDescription)
	return (
		<Card title={'Таблица описаний'}>
			<Card title={'Добавить описание'}>
				<Form
					name='createInformationCard'
					autoComplete="off"
				>
					<Form.Item>
						<Input
							placeholder={'Введите название'}
							value={title}
							onChange={(e) => {
								setTitle(e.target.value)
							}}

						/>
					</Form.Item>
					<Form.Item>
						<TextArea
							placeholder={'Введите описание'}
							value={description}
							onChange={(e) => {
								setDescription(e.target.value)
							}}
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							onClick={save}
						>
							Сохранить
						</Button>
					</Form.Item>
				</Form>
			</Card>
			<Table
				components={{
					body: {
						cell: EditableCell,
					},
				}}
				bordered
				columns={mergedColumns}
				dataSource={descriptions?.map((item) => ({
					key: item.id.toString(),
					...item,
				}))}
			></Table>
		</Card>
	)
}
