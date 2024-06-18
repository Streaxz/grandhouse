export interface ILabelSmallProps {
  text: string;
}
export const LabelStandardDark = ({ text }: ILabelSmallProps) => {
  return (
    <div className={"labelDark"}>
      <h5>{text}</h5>
    </div>
  );
};
