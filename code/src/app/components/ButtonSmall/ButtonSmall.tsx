import { IButtonProps } from "@/app/components/Button/Button";

export const ButtonSmall = ({ onClick, buttonText, style }: IButtonProps) => {
  return (
    <button className={`buttonSmall`} style={style} onClick={onClick}>
      <p className={"projectButtonText"}>{buttonText}</p>
    </button>
  );
};
