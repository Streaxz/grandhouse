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
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ICreateMaterial, IMaterial } from "@/app/types/IMaterial";
import TextArea from "antd/es/input/TextArea";

export interface IMaterialTableProps {
  material?: IMaterial[];
  createMaterial: (data: ICreateMaterial) => void;
  deleteMaterial: (materialId: number) => void;
}

export interface ItemMaterial extends IMaterial {
  key: number;
}

export const MaterialTable = ({
  material,
  deleteMaterial,
  createMaterial,
}: IMaterialTableProps) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [image, setImage] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
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
      render: (_: any, record: ItemMaterial) => {
        return <Typography.Text>{record.imageUrl}</Typography.Text>;
      },
    },
    {
      title: "фото",
      width: "25%",
      render: (_: any, record: ItemMaterial) => {
        return (
          <img src={record.imageUrl} alt={"photo"} style={{ width: "100px" }} />
        );
      },
    },
    {
      title: "Название",
      dataIndex: "title",
      width: "25%",
      render: (_: any, record: ItemMaterial) => {
        return <Typography.Text>{record.title}</Typography.Text>;
      },
    },
    {
      title: "Описание",
      dataIndex: "description",
      width: "25%",
      render: (_: any, record: ItemMaterial) => {
        return <Typography.Text>{record.description}</Typography.Text>;
      },
    },
    {
      title: "Операции",
      dataIndex: "operation",
      width: "20%",
      editable: false,
      render: (_: any, record: ItemMaterial) => (
        <>
          <Typography.Link onClick={() => deleteMaterial(record.id)}>
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

  const saveMaterial = async () => {
    if (title && description && image) {
      await createMaterial({
        title,
        description,
        imageUrl: image,
      });
      setTitle(undefined);
      setDescription(undefined);
      setImage(undefined);
      setImageUrl(undefined);
    }
  };
  return (
    <Card title={"Таблица материала"}>
      <Card title={"Добавить материал"}>
        <Form name="createMaterial" autoComplete="off">
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
              value={title}
              placeholder={"Введите название"}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              value={description}
              placeholder={"Введите описание"}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={saveMaterial}>
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Table
        columns={authorColumn}
        dataSource={material?.map((material) => ({
          key: material.id,
          ...material,
        }))}
      ></Table>
    </Card>
  );
};
