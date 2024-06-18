export const ReviewCardSmall = () => {
  return (
    <div className={"reviewCard"}>
      <img src={"/family.png"} className={"reviewCardPhoto"} alt={"cover"} />
      <div className={"reviewCardContent"}>
        <h5 style={{ color: "#272B40" }}>
          Имя Фамилия, строили с нами 150-метровый каменный дом по проекту
          “Грандхаус-1” в Московской области
        </h5>
        <div className={"emojiStarContainer"}>
          <img src={"/star.png"} className={"emojiStar"} alt="star" />
          <img src={"/star.png"} className={"emojiStar"} alt="star" />
          <img src={"/star.png"} className={"emojiStar"} alt="star" />
          <img src={"/star.png"} className={"emojiStar"} alt="star" />
          <img src={"/star.png"} className={"emojiStar"} alt="star" />
        </div>
        <p style={{ color: "#272B40" }}>
          Небольшой отзыв от одной из семей, построивших дом своей мечты с
          Грандхаусом. Лаконичная благо-желательная цитата, описывающая,
          насколько довольна семья работой компании и взаимодействием с ее
          сотрудниками
        </p>
        <p style={{ color: "#272B40" }}>
          <a>Подробнее о проекте в Журнале</a>
        </p>
      </div>
    </div>
  );
};
