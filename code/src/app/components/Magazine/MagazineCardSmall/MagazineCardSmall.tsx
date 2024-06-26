export const MagazineCardSmall = () => {
  return (
    <div
      className={"magazineCardSmall clickable"}
      style={{
        backgroundImage: `url(/house.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={"magazineCardSmallGradient"} />
      <div className={"magazineCardSmallContainer"}>
        <div className={"magazineCardLargeUpper"}>
          <h3>Как строить фундамент?</h3>
          <p className={"magazineCardP"}>
            Портфолио Грандхауса включает дома и объекты различной сложности,
            построенные по всей Западной России.
          </p>
        </div>
        <h6 style={{ fontWeight: 200 }}> дата</h6>
      </div>
    </div>
  );
};
