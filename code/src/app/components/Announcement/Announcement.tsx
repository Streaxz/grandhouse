export const Announcement = () => {
  return (
    <div className={"announcement"}>
      <p className={"announcementIcon"}>🛠️</p>
      <h5 style={{ color: "#272B40" }} className={"announcementText"}>
        {" "}
        В проекте предусмотрены опции: замена фундамента, полов, установка
        мансардных окон, замена стен на клееный брус другой размерности.
        Стоимость опциональных работ вы найдете в книге проекта.{" "}
      </h5>
    </div>
  );
};
