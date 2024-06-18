export const FooterCities = () => {
  return (
    <div className={"footerCities"}>
      <div className={"footerCity"}>
        <img
          src={"/moscow.png"}
          className={"footerCityImage"}
          alt={"Москва"}
        ></img>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>Москва</h5>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          Партийный пер., д. 1к57, стр. 3, оф. 118 (м. Павелецкая)
        </h5>
      </div>
      <div className={"footerCity"}>
        <img
          src={"/nizhny.png"}
          className={"footerCityImage"}
          alt={"Нижний Новгород"}
        ></img>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          Нижний Новгород
        </h5>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          ул. Невзоровых, д. 49 (напротив ЖК Этажи)
        </h5>
      </div>
      <div className={"footerCity"}>
        <img
          src={"/kirov.png"}
          className={"footerCityImage"}
          alt={"Киров"}
        ></img>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>Киров</h5>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          ул. Свободы, 73 Производство леса: ул. Щорса, 68{" "}
        </h5>
      </div>
    </div>
  );
};
