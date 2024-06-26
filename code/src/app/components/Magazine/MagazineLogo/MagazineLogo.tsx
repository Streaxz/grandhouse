export const MagazineLogo = () => {
  return (
    <div className={"magazineLogo"}>
      <img
        src={"logoMagazine.png"}
        className={"magazineLogoImage"}
        alt={"magazineImage"}
      ></img>
      <p style={{ maxWidth: "80%", textAlign: "center" }}>
        Свежие новости с наших строительных площадок, новинки каталога проектов,
        события, достижения, а также полезные советы для вас! Читайте
        Грандхаус-журнал!
      </p>
    </div>
  );
};
