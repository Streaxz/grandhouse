import { FooterContacts } from "@/app/components/Footer/FooterContacts/FooterContacts";
import React from "react";
import { FooterCities } from "@/app/components/Footer/FooterCities/FooterCities";

export const FooterInfo = () => {
  return (
    <div className={"footerInfo"}>
      <FooterContacts />
      <div className={"footerSeparateLine"} />
      <h5 style={{ color: "#62698C", textAlign: "center" }}>
        Ждем вас на встречу! Работаем в трех городах с понедельника по пятницу с
        9 утра до 19 вечера.
        <br />
        <br />
        По клику на адрес откроются Яндекс. Карты
      </h5>
      <FooterCities />
      <h6 style={{ color: "#272B40", textAlign: "center" }}>
        © 2015-2023, ООО «СПК ГрандХаус». ИНН/КПП: 5260409997/526201001.
        Визуализации и материалы, представленные на данном сайте, являются
        <br />
        собственностью компании ООО «СПК ГрандХаус». Копирование без указания
        источника запрещено
      </h6>
    </div>
  );
};
