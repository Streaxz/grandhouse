"use client";
import React, { CSSProperties } from "react";

export interface IButtonProps {
  onClick: () => void;
  buttonText: string;
  style?: CSSProperties;
}
export const Button = ({ onClick, buttonText, style }: IButtonProps) => {
  return (
    <a className={`projectButton`} style={style} onClick={onClick}>
      <h2 className={"projectButtonText"}>{buttonText}</h2>
    </a>
  );
};
