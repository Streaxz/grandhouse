export const ProjectCard = () => {
  return (
    <div className={"projectCard"}>
      <div className={"frame"}>
        <div className={"test"}>
          <img src={"/family.png"} alt={"project"} />
          <div className={"projectCartContent"}>
            <h5 style={{ color: "#272B40" }}>
              Имя Фамилия, строили с нами 150-метровый каменный дом по проекту
              “Грандхаус-1” в Московской области
            </h5>
            <div className={"emojiStarContainer"}>
              <div className={"emojiStar"}>
                <img src={"/star.png"} alt={"star"} />
              </div>
              <div className={"emojiStar"}>
                <img src={"/star.png"} alt={"star"} />
              </div>
              <div className={"emojiStar"}>
                <img src={"/star.png"} alt={"star"} />
              </div>
              <div className={"emojiStar"}>
                <img src={"/star.png"} alt={"star"} />
              </div>
              <div className={"emojiStar"}>
                <img src={"/star.png"} alt={"star"} />
              </div>
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
      </div>
    </div>
  );
};
