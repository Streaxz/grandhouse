import Image from "next/image";
export const FooterCities = () => {
  return (
    <div className={"footerCities"}>
      <div className={"footerCity"}>
        <div className={"footerCityImage"}>
          <Image src={"/moscow.png"} fill alt={"Москва"} />
        </div>

        <h5 style={{ color: "#62698C", textAlign: "center" }}>Москва</h5>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          Партийный пер., д. 1к57, стр. 3, оф. 118 (м. Павелецкая)
        </h5>
      </div>
      <div className={"footerCity"}>
        <div className={"footerCityImage"}>
          <Image src={"/nizhny.png"} fill alt={"Нижний Новгород"}></Image>
        </div>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          Нижний Новгород
        </h5>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          ул. Невзоровых, д. 49 (напротив ЖК Этажи)
        </h5>
      </div>
      <div className={"footerCity"}>
        <div className={"footerCityImage"}>
          <Image src={"/kirov.png"} fill alt={"Киров"} />
        </div>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>Киров</h5>
        <h5 style={{ color: "#62698C", textAlign: "center" }}>
          ул. Свободы, 73 Производство леса: ул. Щорса, 68{" "}
        </h5>
      </div>
    </div>
  );
};
