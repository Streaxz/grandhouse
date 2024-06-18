export interface IRoundFeaturesItemProps {
  src: string;
  headerText: string;
  descriptionText: string;
  textColor?: string;
}
export const RectangleFeature = ({
  src,
  headerText,
  descriptionText,
  textColor,
}: IRoundFeaturesItemProps) => {
  return (
    <div className={"rectangleItemContainer"}>
      <h5 style={{ fontWeight: 200, color: textColor ? textColor : "#FFF" }}>
        {headerText}
      </h5>
      <div
        className={"rectangleItemImage"}
        style={{
          background: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p
        style={{
          width: "60%",
          textAlign: "center",
          color: textColor ? textColor : "#FFF",
        }}
      >
        {descriptionText}
      </p>
    </div>
  );
};
