import { useRouter } from "next/navigation";
import Image from "next/image";
export interface IRoundFeaturesItemProps {
  src: string;
  headerText?: string;
  descriptionText?: string;
  link?: string;
}
export const RoundFeaturesItem = ({
  src,
  headerText,
  descriptionText,
  link,
}: IRoundFeaturesItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={link ? () => router.push(link) : undefined}
      className={`roundFeaturesItemContainer ${link ? "clickable" : ""}`}
    >
      <div className={"roundFeaturesImage"}>
        <Image
          className={"roundFeaturesImageInside"}
          src={src}
          alt={"сотрудник"}
          fill
          objectFit={"cover"}
        ></Image>
      </div>

      {headerText && (
        <h3
          style={{
            textAlign: "center",
            fontWeight: 200,
          }}
        >
          {headerText}
        </h3>
      )}
      {descriptionText && (
        <h5
          style={{
            textAlign: "center",
            fontWeight: 200,
          }}
        >
          {descriptionText}
        </h5>
      )}
    </div>
  );
};
