import { IInformation } from "@/app/types/IInformation";

export interface IInfoTableProps {
  information: IInformation[];
}
export const InfoTable = ({ information }: IInfoTableProps) => {
  return (
    <div className={"infoTable"}>
      <div className={"infoTableItem infoTableHeader infoTableBorder"}>
        <h5 style={{ color: "#272B40" }}> Информация о доме</h5>
      </div>
      {information.map((item) => (
        <div
          key={`information-${item.id}`}
          className={"infoTableItem infoTableBorder"}
        >
          <h5 style={{ color: "#272B40" }}>{item.title}</h5>
          <h5 style={{ color: "#272B40" }}>{item.value}</h5>
        </div>
      ))}

      <div className={"infoTableItem"}>
        <h6 style={{ color: "#272B40" }}>
          {" "}
          Как соотносятся с собой строительные площади?
        </h6>
      </div>
    </div>
  );
};
