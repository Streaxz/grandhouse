import Image from "next/image";

export const ReviewCardLarge = () => {
  return (
    <div className={"magazineCardLarge"}>
      <div
        className={"magazineCardLargeImage"}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={"/reviewPhoto.jpeg"} alt="photo" fill objectFit={"cover"} />
      </div>
      <div className={"magazineCardLargeContent"}>
        <div className={"magazineCardLargeUpper"}>
          <h6 style={{ color: "#272B40", width: "82%" }}>
            {" "}
            Имя Фамилия, строили с нами 150-метровый каменный дом по проекту
            “Грандхаус-1” в Московской области{" "}
          </h6>
          <div className={"emojiStarContainer"}>
            <div className={"emojiStar"}>
              <Image src={"/star.png"} alt="star" fill />
            </div>
            <div className={"emojiStar"}>
              <Image src={"/star.png"} alt="star" fill />
            </div>
            <div className={"emojiStar"}>
              <Image src={"/star.png"} alt="star" fill />
            </div>
            <div className={"emojiStar"}>
              <Image src={"/star.png"} alt="star" fill />
            </div>
            <div className={"emojiStar"}>
              <Image src={"/star.png"} alt="star" fill />
            </div>
          </div>
          <p className={"magazineCardLargeDescription"}>
            Небольшой отзыв от одной из семей, построивших дом своей мечты с
            Грандхаусом. Лаконичная благо-желательная цитата, описывающая,
            насколько довольна семья работой компании и взаимодействием с ее
            сотрудниками
          </p>
        </div>
        <p style={{ color: "#272B40" }}> Подробнее о проекте в журнале</p>
      </div>
    </div>
  );
};
