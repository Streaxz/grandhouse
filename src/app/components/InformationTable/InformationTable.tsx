import {Button, Card, Form, Input, Table, Typography} from "antd";
import React, {useEffect, useMemo, useRef, useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {IInformation} from "@/app/types/IInformation";
import {useInformation} from "@/app/hooks/useInformation";

export interface IDescriptionTableProps {
	informations?: IInformation[];
	getProjects: () => void;
	projectId?: number,
}

export interface Item extends IInformation{
	key: string;
}

enum InputType {
	TITLE = 'title',
	VALUE = 'value',
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

export const InformationTable =  ({
																		informations,
																		getProjects,
																		projectId,
																	} : IDescriptionTableProps) => {
	const [editingKey, setEditingKey] = useState('');
	const [title, setTitle] = useState<string>();
	const [value, setValue] = useState<string>();
	const [updatedTitle, setUpdatedTitle] = useState<string>();
	const [updatedValue, setUpdatedValue] = useState<string>();
	const {
		updateItem,
		deleteItem,
		createItem,
	}= useInformation(getProjects);

	const edit = (record: Partial<Item> & { key: React.Key }) => {
		setEditingKey(record.key);
		setUpdatedTitle(record.title);
		setUpdatedValue(record.value)
	};

	const cancel = () => {
		setEditingKey('');
		setUpdatedTitle(undefined);
		setUpdatedValue(undefined)
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
				case InputType.VALUE:
					return (
						<Input
							key={'updateDescription'}
							value={updatedValue}
							onChange={(e) => {setUpdatedValue(e.target.value)}}
						/>
					);
				default:
					return <Input />;
			}
		}, [inputType, record ]);

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
			title: 'Значение',
			dataIndex: 'value',
			width: '25%',
			editable: true,
			render: (_: any, record: Item) => {
				return (
					<Typography.Text>
						{record.value}
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

						<Typography.Link onClick={() => deleteItem(record.id)}>
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
		if (title && value && projectId) {
			await createItem({
				title,
				value,
				projectId: projectId
			});
			setTitle(undefined);
			setValue(undefined);
		}
	};

	const update = async (id: number) => {
		await updateItem({
			title: updatedTitle || '',
			value: updatedValue || '',
			id
		});
		setEditingKey('')
	};

	return (
		<Card title={'Таблица информации'}>
			<Card title={'Добавить информацию'}>
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
							placeholder={'Введите значение'}
							value={value}
							onChange={(e) => {
								setValue(e.target.value)
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
				dataSource={informations?.map((item) => ({
					key: item.id.toString(),
					...item,
				}))}
			></Table>
		</Card>
	)
}