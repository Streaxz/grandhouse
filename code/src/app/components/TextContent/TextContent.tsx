interface ITextProps {
  text: string;
  color?: string;
}

export const TextContent = ({ text, color }: ITextProps) => {
  return (
    <div className={"text"}>
      <p style={{ color }}>{text}</p>
    </div>
  );
};
