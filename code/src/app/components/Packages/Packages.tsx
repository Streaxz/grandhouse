"use client";
import Dropdown from "react-dropdown";
import React, { useState } from "react";
import { IPrice } from "@/app/types/IPrice";
import { random } from "@ctrl/tinycolor";

export interface IPackagesProps {
  prices: IPrice[];
}
export const Packages = ({ prices }: IPackagesProps) => {
  const [price, setPrice] = useState<IPrice>(prices[0]);
  // const [priceId, setPriceId] = useState<string>(prices[0].id.toString());
  const handleChange = (value: string) => {
    setPrice(prices.find((price) => price.id.toString() === value)!);
  };

  const options = prices.map((item) => {
    return {
      value: item.id.toString(),
      label: item.title,
    };
  });
  return (
    <div className={"packages"}>
      <div className={"packagesHeader"}>
        <p style={{ color: "#62698C" }}>Пакеты</p>
        <Dropdown
          className={"dropdown"}
          options={options}
          value={options[0]}
          onChange={(option) => handleChange(option.value)}
          arrowClassName={"dropdownArrow"}
          controlClassName={"dropdownControl"}
          placeholderClassName={"dropdownPlaceholder"}
          menuClassName={"dropdownMenu"}
          placeholder="цена"
        />
      </div>
      <div className={"packagesItem"}>
        <img
          className={"confirmIcon"}
          src={"/confirm.png"}
          alt={"Преимущество"}
        />
        <p style={{ color: "#272B40" }}>
          Коробка дома (фундамент – монолитная ж/б плита; разводка внутренней
          канализации, закладные детали ввода и вывода инженерных коммуникаций;
          стены/перегородки – двойной керамический кирпич, вентиляционная шахта
          – рядовой керамический кирпич; чердачное перекрытие – деревянные
          балки; покрытие кровли – металлочерепица, снегозадержатели,
          вентиляционные аэраторы)
        </p>
      </div>
      {price.features.map((feature) => (
        <div key={`feature-${random()}`} className={"packagesItem"}>
          <img
            className={"confirmIcon"}
            src={"/confirm.png"}
            alt={"Преимущество"}
          />
          <p style={{ color: "#272B40" }}>{feature}</p>
        </div>
      ))}
      <div className={"packagesFooter"}>
        <div className={"packagesPrice"}>
          <h3 style={{ color: "#272B40" }}>{price.amount}₽</h3>
          <h6 style={{ color: "#272B40" }}>
            со скидкой 7% при подписании договора до конца 2023 года
          </h6>
        </div>
        <p style={{ color: "#62698C", textWrap: "nowrap" }}>
          Построим за {price.estimate}
        </p>
      </div>
    </div>
  );
};
