import { ButtonPdf } from "@/app/components/ButtonPdf/ButtonPdf";

export interface IOfferPdfProps {
  text: string;
  source: string;
}
export const OfferPdf = ({ text, source }: IOfferPdfProps) => {
  return (
    <div
      className={"pdfContainer"}
      style={{ flexWrap: "wrap", textAlign: "center" }}
    >
      <h3>{text}</h3>
      <ButtonPdf source={source} />
    </div>
  );
};
