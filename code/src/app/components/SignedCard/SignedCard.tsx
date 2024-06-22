import React from "react";
import Image from "next/image";
export const SignedCard = () => {
  return (
    <div className="signedCardContainer">
      <Image
        src={"/sunset.jpeg"}
        fill
        alt={"cover"}
        objectFit={"cover"}
        className={"borderRadius"}
      />
      <div className="signedCardGradient" />
      <div className="signedCardContent">
        <h3>Взгляд за горизонт</h3>
        <p style={{ height: "100%" }}>
          Небольшой финальный аккорд. Грандхаус всегда смотрит в будущее, и не
          только в архитектуре и строительстве, но и в медийных подходах. Мы не
          просто возводим дома - но и рассказываем об этом.
        </p>
        <div>
          <h6>
            Генеральный директор
            <br />
            Никита Кузнецов
          </h6>
          <img src={"/sign.png"} className={"signedCardSign"} alt={"Подпись"} />
        </div>
      </div>
      <div className={"signedCardImage"}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={"/kuznetsov.png"} alt={"Портрет"} fill />
        </div>
      </div>
    </div>
  );
};
