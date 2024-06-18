export interface IRoundBlock {
  src: string;
  text: string;
}
export const RoundBlock = ({ src, text }: IRoundBlock) => {
  return (
    <div className={"roundBlock"}>
      <img className="roundBlockImage" src={src} alt={"сотрудник"} />
      <h5 style={{ textAlign: "center" }}>{text}</h5>
    </div>
  );
};
