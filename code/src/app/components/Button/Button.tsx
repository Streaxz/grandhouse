"use client";
import React, { CSSProperties } from "react";

export interface IButtonProps {
  onClick: () => void;
  buttonText: string;
  style?: CSSProperties;
  notClickable?: boolean;
}
export const Button = ({
  onClick,
  buttonText,
  style,
  notClickable,
}: IButtonProps) => {
  return (
    <a
      className={
        notClickable ? "projectButton clickable" : "projectButton clickable"
      }
      style={style}
      onClick={onClick}
    >
      <h2 className={"projectButtonText"}>{buttonText}</h2>
    </a>
  );
};
