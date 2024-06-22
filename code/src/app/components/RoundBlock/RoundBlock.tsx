import Image from "next/image";
export interface IRoundBlock {
  src: string;
  text: string;
}
export const RoundBlock = ({ src, text }: IRoundBlock) => {
  return (
    <div className={"roundBlock"}>
      <div className="roundBlockImage">
        <Image
          src={src}
          alt={"сотрудник"}
          fill
          objectFit={"cover"}
          className={"borderRadius"}
        />
      </div>

      <h5 style={{ textAlign: "center" }}>{text}</h5>
    </div>
  );
};
