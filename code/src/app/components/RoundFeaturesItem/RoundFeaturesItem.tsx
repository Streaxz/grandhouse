import { useRouter } from "next/navigation";

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
      <div
        className={"roundFeaturesImage"}
        style={{
          background: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

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
