import Image from "next/image";
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={src} alt={"photo"} fill objectFit={"cover"} />
      </div>
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
