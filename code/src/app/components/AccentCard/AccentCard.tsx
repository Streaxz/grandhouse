import Image from "next/image";
export interface IAccentCardProps {
  header: string;
  text: string;
  source: string;
  alternative?: boolean;
}
export const AccentCard = ({
  header,
  text,
  source,
  alternative,
}: IAccentCardProps) => {
  return (
    <div
      className={"accentCard"}
      style={alternative ? { flexDirection: "row-reverse" } : {}}
    >
      <div className={"accentCardText"}>
        <h3>{header}</h3>
        <p>{text}</p>
        <a>
          <p>Подробнее</p>
        </a>
      </div>
      <div
        className={"accentCardImage"}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          className={"accentCardImage"}
          fill
          src={source}
          alt="background"
          objectFit={"cover"}
        />
      </div>
    </div>
  );
};
