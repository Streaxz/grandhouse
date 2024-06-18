export interface IPictureFeaturedLargeProps {
  source: string;
}
export const PictureFeaturedLarge = ({
  source,
}: IPictureFeaturedLargeProps) => {
  return (
    <div
      className={"pictureFeaturedLarge"}
      style={{
        backgroundImage: `url(${source})`,
      }}
    />
  );
};
