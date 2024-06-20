"use client";
import styles from "./admin.module.css";
import React, { useEffect, useState } from "react";
import { TextBlock } from "@/app/components/TextBlock/TextBlock";
import { useUser } from "@/app/hooks/useUser";
import { Login } from "@/app/components/Login/Login";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Select,
  Table,
  Typography,
  Drawer,
  Switch,
  Upload,
  GetProp,
  UploadProps,
  message,
  InputNumber,
} from "antd";
import { useProject } from "@/app/hooks/useProject";
import { IProject } from "@/app/types/IProject";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { IPhoto, PHOTO_TYPE } from "@/app/types/IPhoto";
import { useEmployee } from "@/app/hooks/useEmployee";
import { AuthorTable } from "@/app/components/AuthorTable/AuthorTable";
import "./unsetColor.css";
import { useMaterial } from "@/app/hooks/useMaterial";
import { MaterialTable } from "@/app/components/MaterialTable/MaterialTable";
import { DescriptionTable } from "@/app/components/DescriptionTable/DescriptionTable";
import { InformationTable } from "@/app/components/InformationTable/InformationTable";
import { usePrices } from "@/app/hooks/usePrices";
import dynamic from "next/dynamic";
import { useSeries } from "@/app/hooks/useSeries";
type FieldType = {
  title?: string;
};

export interface Item extends IProject {
  key: number;
}

export interface ItemPhoto extends IPhoto {
  key: number;
}

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const AdminPage = () => {
  const [form] = Form.useForm<IProject>();
  const { auth, jwt, setJwt } = useUser();
  const {
    projects,
    getProjects,
    createProject,
    deleteProject,
    updateProject,
    createPhoto,
    deletePhoto,
    updateMaterials,
    updatePrices,
  } = useProject();

  const { employees, deleteEmployee, createEmployee, getEmployees } =
    useEmployee();

  const { materials, getMaterials, createMaterial, deleteMaterial } =
    useMaterial();

  const { prices, getPrices } = usePrices();

  const { series, getSeries } = useSeries();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [image, setImage] = useState<string>();
  const [imageType, setImageType] = useState<PHOTO_TYPE>();
  const [order, setOrder] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);
  const [updatedStyles, setUpdatedStyles] = useState<boolean>(false);
  useEffect(() => {
    if (document && !updatedStyles) {
      //add css style to header id display: none
      const header = document.getElementById("header");
      if (header) {
        header.style.display = "none";
      }

      const body = document.getElementById("body");
      if (body) {
        body.style.color = "black";
      }
      setUpdatedStyles(true);
    }
  }, [document, updatedStyles]);
  const getFile = (e: any) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

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

  const [updatedProject, setUpdatedProject] = useState<IProject | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      await getProjects();
      await getEmployees();
      await getMaterials();
      await getPrices();
      await getSeries();
    };
    if (auth) {
      fetchData();
    }
  }, [jwt, auth]);

  console.log(updatedProject);
  useEffect(() => {
    setUpdatedProject(
      projects?.find((project) => project.id == updatedProject?.id),
    );
  }, [projects]);

  const handleUpdateProject = (record: Item) => {
    window.scrollTo(0, 0);
    form.setFieldsValue(record);
    setUpdatedProject(record);
    setOpen(true);
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

  const photoColumns = [
    {
      title: "ссылка",
      dataIndex: "imageUrl",
      width: "25%",
      render: (_: any, record: ItemPhoto) => {
        return <Typography.Text>{record.imageUrl}</Typography.Text>;
      },
    },
    {
      title: "фото",
      width: "25%",
      render: (_: any, record: ItemPhoto) => {
        return (
          <img src={record.imageUrl} alt={"photo"} style={{ width: "100px" }} />
        );
      },
    },
    {
      title: "тип",
      dataIndex: "type",
      width: "25%",
      render: (_: any, record: ItemPhoto) => {
        return <Typography.Text>{record.type}</Typography.Text>;
      },
    },
    {
      title: "порядок",
      dataIndex: "order",
      width: "25%",
      render: (_: any, record: ItemPhoto) => {
        return <Typography.Text>{record.order}</Typography.Text>;
      },
    },
    {
      title: "Операции",
      dataIndex: "operation",
      width: "20%",
      editable: false,
      render: (_: any, record: ItemPhoto) => (
        <>
          <Typography.Link
            disabled={!!updatedProject}
            onClick={() => {}}
            style={{ marginRight: 8 }}
          >
            Изменить
          </Typography.Link>
          <Typography.Link onClick={() => deletePhoto(record.id)}>
            Удалить
          </Typography.Link>
        </>
      ),
    },
  ];

  const projectColumns = [
    {
      title: "Проект",
      dataIndex: "title",
      width: "25%",
      editable: true,
      render: (_: any, record: Item) => {
        return <Typography.Text>{record.title}</Typography.Text>;
      },
    },
    {
      title: "Серия",
      dataIndex: "series",
      width: "25%",
      editable: true,
      render: (_: any, record: Item) => {
        return <Typography.Text>{record.series?.comment}</Typography.Text>;
      },
    },
    {
      title: "В архиве",
      dataIndex: "isArchive",
      width: "15%",
      render: (_: any, record: Item) => {
        return <Checkbox checked={record.isArchive}></Checkbox>;
      },
    },
    {
      title: "Индивидуальный",
      dataIndex: "isIndividual",
      width: "15%",
      render: (_: any, record: Item) => {
        return <Checkbox checked={record.isIndividual}></Checkbox>;
      },
    },
    {
      title: "Операции",
      dataIndex: "operation",
      width: "20%",
      editable: false,
      render: (_: any, record: Item) => (
        <>
          <Typography.Link
            disabled={!!updatedProject}
            onClick={() => handleUpdateProject(record)}
            style={{ marginRight: 8 }}
          >
            Изменить
          </Typography.Link>
          <Typography.Link onClick={() => deleteProject(record.id)}>
            Удалить
          </Typography.Link>
        </>
      ),
    },
  ];

  const onFinish = async (values: any) => {
    await updateProject({
      id: updatedProject?.id,
      ...values,
    });
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const savePhoto = async () => {
    if (imageType && image) {
      await createPhoto({
        type: imageType,
        imageUrl: image,
        projectId: updatedProject?.id!,
        order,
      });
      setImageType(undefined);
      setImage(undefined);
      setImageUrl(undefined);
      setOrder(undefined);
    }
  };
  return (
    <main className={styles.page}>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContainer}>
          <TextBlock
            rectangleColor={"#FFF"}
            textColor={"#FFF"}
            mainText={"Админ панель"}
          />
          {!auth ? (
            <Login setJwt={setJwt} />
          ) : (
            <div className={styles.table}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  width: "100%",
                }}
              >
                <Card
                  title="Таблица проектов"
                  size="default"
                  style={{ width: "100%" }}
                >
                  {/*<Editor />*/}
                  <Card title={"Создать"} size="small">
                    <Form
                      name="basic"
                      onFinish={async (values) => {
                        await createProject(values.title);
                      }}
                      // onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      style={{ display: "flex", gap: "10px" }}
                    >
                      <Form.Item<FieldType>
                        label="Название проекта"
                        name="title"
                        rules={[
                          {
                            required: true,
                            message: "Поле необходимо заполнить!",
                          },
                        ]}
                      >
                        <Input
                          style={{ width: "200px" }}
                          placeholder="Название проекта"
                        />
                      </Form.Item>
                      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{ color: "white" }}
                        >
                          Создать
                        </Button>
                      </Form.Item>
                    </Form>
                  </Card>
                  <Table
                    columns={projectColumns}
                    dataSource={
                      projects?.map((project) => {
                        return {
                          key: project.id,
                          ...project,
                        };
                      }) as Item[]
                    }
                    bordered
                  ></Table>
                </Card>
              </div>
              <AuthorTable
                employees={employees}
                createEmployee={createEmployee}
                deleteEmployee={deleteEmployee}
              />
              <MaterialTable
                material={materials}
                createMaterial={createMaterial}
                deleteMaterial={deleteMaterial}
              />

              <Button
                type={"primary"}
                onClick={() => {
                  setJwt(undefined);
                  localStorage.clear();
                }}
              >
                Выйти
              </Button>
            </div>
          )}
        </div>
      </div>
      <Drawer
        title="Редактирование проекта"
        width={"80%"}
        open={open}
        style={{ overflow: "scroll", maxHeight: "100vh" }}
        onClose={() => {
          setUpdatedProject(undefined);
          setOpen(false);
        }}
        destroyOnClose={true}
      >
        <div
          style={{
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "24px",
          }}
        >
          <Form
            form={form}
            name={"updateProject"}
            onFinish={onFinish}
            style={{ overflow: "scroll" }}
          >
            <Form.Item name="title" label="Название">
              <Input />
            </Form.Item>
            <Form.Item name="seriesId" label="Серия">
              <Select
                options={series?.map(({ id, comment }) => ({
                  value: id,
                  label: comment,
                }))}
              />
            </Form.Item>
            <Form.Item name="estimateLink" label="ссылка на смету">
              <Input />
            </Form.Item>
            <Form.Item name="isArchive" label="В архиве">
              <Switch />
            </Form.Item>
            <Form.Item name="isIndividual" label="Индивидуальный">
              <Switch />
            </Form.Item>
            <Form.Item name="area" label="Площадь">
              <InputNumber />
            </Form.Item>
            <Form.Item name="price" label="Стоимость">
              <InputNumber />
            </Form.Item>
            <Form.Item name="size" label="Size">
              <InputNumber />
            </Form.Item>
            <Form.Item name="bedroomsCount" label="Количество спален">
              <Input />
            </Form.Item>
            <Form.Item name="bathroomCount" label="Количество ванных комнат">
              <Input />
            </Form.Item>
            <Form.Item name="floorsCount" label="Количество этажей">
              <Select
                options={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item name="isBasement" label="С подвалом">
              <Switch />
            </Form.Item>
            <Form.Item name="isGarage" label="С гаражом">
              <Switch />
            </Form.Item>
            {/*<Form.Item name="creationDate" label="Дата публикации">*/}
            {/*	<DatePicker />*/}
            {/*</Form.Item>*/}
            {/* Add more form items for the remaining keys */}
            <Card title={"Фото"}>
              <Card title={"Добавить фото"}>
                <Form name="uploadPhoto" autoComplete="off">
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
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{ width: "100%" }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Select
                      placeholder={"Тип"}
                      options={(
                        Object.keys(PHOTO_TYPE) as Array<
                          keyof typeof PHOTO_TYPE
                        >
                      ).map((key) => {
                        return {
                          value: key,
                          label: key,
                        };
                      })}
                      onChange={(value) => setImageType(value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <InputNumber
                      style={{ width: "300px" }}
                      placeholder={"Порядок выведения"}
                      //@ts-ignore
                      onChange={(value) => {
                        //@ts-ignore
                        setOrder(value);
                      }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" onClick={savePhoto}>
                      Сохранить
                    </Button>
                  </Form.Item>
                </Form>
              </Card>

              <Table
                columns={photoColumns}
                dataSource={updatedProject?.photos?.map((photo) => ({
                  key: photo.id,
                  ...photo,
                }))}
              ></Table>
            </Card>
            <Card title={"Первая секция"}>
              <Form.Item name="mainText" label="Текст">
                <TextArea />
              </Form.Item>
              <Form.Item name="mainQuoteText" label="Цитата">
                <TextArea />
              </Form.Item>
              <Form.Item name="mainQuoteAuthorId" label="Автор">
                <Select
                  options={employees?.map((employee) => {
                    return {
                      value: employee.id,
                      label: `${employee.name} ${employee.surname}`,
                    };
                  })}
                />
              </Form.Item>
            </Card>
            <Card title={"Планировка"}>
              <Form.Item name="layoutText" label="Текст">
                <TextArea />
              </Form.Item>
            </Card>
            <Card title={"Интерьер"}>
              <Form.Item name="interiorText" label="Текст">
                <TextArea />
              </Form.Item>
            </Card>
            <Card title={"История проекта"}>
              <Form.Item name="historyText" label="Текст">
                <TextArea />
              </Form.Item>
              <Form.Item name="historyQuoteText" label="Цитата">
                <TextArea />
              </Form.Item>
              <Form.Item name="historyQuoteAuthorId" label="Автор">
                <Select
                  options={employees?.map((employee) => {
                    return {
                      value: employee.id,
                      label: `${employee.name} ${employee.surname}`,
                    };
                  })}
                />
              </Form.Item>
            </Card>
            <Card title={"Наружняя отделка"}>
              <Select
                style={{ width: "100%" }}
                mode={"multiple"}
                defaultValue={updatedProject?.materials?.map((item) => item.id)}
                options={materials?.map((item) => {
                  return {
                    value: item.id,
                    label: item.title,
                  };
                })}
                onChange={async (value) => {
                  await updateMaterials(updatedProject!.id, value);
                }}
                placeholder={"Выберите материал"}
              ></Select>

              <DescriptionTable
                descriptions={updatedProject?.exteriorDescriptions}
                getProjects={getProjects}
                projectId={updatedProject?.id}
              />
              <InformationTable
                informations={updatedProject?.information}
                getProjects={getProjects}
                projectId={updatedProject?.id}
              />
            </Card>
            <Card title={"Статьи"}></Card>
            <Card title={"Построенный проект"}>
              <Form.Item name="completeText" label="Текст">
                <TextArea />
              </Form.Item>
            </Card>
            <Card title={"Цены"}>
              <Select
                style={{ width: "100%" }}
                mode={"multiple"}
                defaultValue={updatedProject?.pricePackages?.map(
                  (item) => item.id,
                )}
                options={prices?.map((item) => {
                  return {
                    value: item.id,
                    label: item.title,
                  };
                })}
                onChange={async (value) => {
                  await updatePrices(updatedProject!.id, value);
                }}
                placeholder={"Выберите цены"}
              ></Select>
            </Card>
            <Card title={"Послесловие"}>
              <Form.Item name="postScriptumText" label="Текст">
                <TextArea />
              </Form.Item>
            </Card>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </main>
  );
};

export default AdminPage;
