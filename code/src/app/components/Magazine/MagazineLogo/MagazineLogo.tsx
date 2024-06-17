export const MagazineLogo = () => {
  return (
    <div className={"magazineLogo"}>
      <img
        src={"logoMagazine.png"}
        className={"magazineLogoImage"}
        alt={"magazineImage"}
      ></img>
      <p style={{ maxWidth: "80%", textAlign: "center" }}>
        Вводка о миссии журнала и том, почему строительная компания его ведет
      </p>
    </div>
  );
};
