interface ITextProps {
  firstText: string;
  color?: string;
}

export const TextColumn = ({ firstText, color }: ITextProps) => {
  return (
    <div className={"text"}>
      <p style={{ textAlign: "center", color }}>{firstText}</p>
    </div>
  );
};
