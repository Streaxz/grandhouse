export interface IEmployeeCardLargeProps {
  headerText: string;
  descriptionText: string;
  src: string;
  link: string;
}
export const EmployeeCardLarge = ({
  src,
  descriptionText,
  link,
  headerText,
}: IEmployeeCardLargeProps) => {
  return (
    <div className={"employeeCardLarge"}>
      <div
        className={"magazineCardLargeImage"}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className={"magazineCardLargeContent"}>
        <h5 style={{ color: "#272B40", width: "90%" }}>{headerText}</h5>
        <p
          style={{
            color: "#272B40",
            height: "-webkit-fill-available",
            width: "90%",
          }}
        >
          {descriptionText}
        </p>
        {link && (
          <a href={link}>
            <p style={{ color: "#272B40" }}>Интервью в журнале</p>
          </a>
        )}
      </div>
    </div>
  );
};
