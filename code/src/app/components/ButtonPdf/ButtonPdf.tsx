import React from "react";
import Image from "next/image";

interface IButtonPdfProps {
  source: string;
}
export const ButtonPdf = ({ source }: IButtonPdfProps) => {
  return (
    <a
      target={"_blank"}
      className={`pdfButton`}
      href={source}
      style={{ textDecoration: "none" }}
    >
      <div className={"emojiPdf"}>
        <Image src={"/emojiPDF.png"} fill alt={"pdfFile"} />
      </div>
      <h3 className={"projectButtonText"}> Скачать PDF</h3>
    </a>
  );
};
