import {
  Button,
  Card,
  Form,
  GetProp,
  Input,
  message,
  Table,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import React, { useState } from "react";
import { ICreateEmployee, IEmployee } from "@/app/types/IEmployee";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

export interface IAuthorTableProps {
  employees?: IEmployee[];
  createEmployee: (data: ICreateEmployee) => void;
  deleteEmployee: (employeeId: number) => void;
}

export interface ItemEmployee extends IEmployee {
  key: number;
}

export const AuthorTable = ({
  employees,
  deleteEmployee,
  createEmployee,
}: IAuthorTableProps) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [image, setImage] = useState<string>();
  const [name, setName] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [loading, setLoading] = useState(false);

  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    // 	message.error('Image must smaller than 2MB!');
    // }
    return isJpgOrPng;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
        setImage(info.file.response.filePath);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const authorColumn = [
    {
      title: "ссылка",
      dataIndex: "imageUrl",
      width: "25%",
      render: (_: any, record: ItemEmployee) => {
        return <Typography.Text>{record.imageUrl}</Typography.Text>;
      },
    },
    {
      title: "фото",
      width: "25%",
      render: (_: any, record: ItemEmployee) => {
        return (
          <img src={record.imageUrl} alt={"photo"} style={{ width: "100px" }} />
        );
      },
    },
    {
      title: "Имя",
      dataIndex: "name",
      width: "25%",
      render: (_: any, record: ItemEmployee) => {
        return <Typography.Text>{record.name}</Typography.Text>;
      },
    },
    {
      title: "Фамилия",
      dataIndex: "surname",
      width: "25%",
      render: (_: any, record: ItemEmployee) => {
        return <Typography.Text>{record.surname}</Typography.Text>;
      },
    },
    {
      title: "Операции",
      dataIndex: "operation",
      width: "20%",
      editable: false,
      render: (_: any, record: ItemEmployee) => (
        <>
          <Typography.Link onClick={() => deleteEmployee(record.id)}>
            Удалить
          </Typography.Link>
        </>
      ),
    },
  ];

  const getFile = (e: any) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const saveEmployee = async () => {
    if (name && surname && image) {
      await createEmployee({
        name,
        surname,
        imageUrl: image,
      });
      setName(undefined);
      setSurname(undefined);
      setImage(undefined);
      setImageUrl(undefined);
    }
  };
  return (
    <Card title={"Таблица авторов"}>
      <Card title={"Добавить автора"}>
        <Form name="createEmployee" autoComplete="off">
          <Form.Item name="image" getValueFromEvent={getFile}>
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              maxCount={1}
              showUploadList={false}
              action={`${process.env.NEXT_PUBLIC_API_URL}/api/upload`}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Input
              placeholder={"Введите имя"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder={"Введите фамилию"}
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={saveEmployee}>
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Table
        columns={authorColumn}
        dataSource={employees?.map((employee) => ({
          key: employee.id,
          ...employee,
        }))}
      ></Table>
    </Card>
  );
};
