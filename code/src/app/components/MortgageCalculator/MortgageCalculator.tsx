import Dropdown, { Option } from "react-dropdown";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { IPrice } from "@/app/types/IPrice";

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  {
    value: 5,
    label: "5,0 млн",
  },
  {
    value: 15,
    label: "15,0 млн",
  },
];

const marksEstimate = [
  {
    value: 10,
    label: "10 лет",
  },
  {
    value: 30,
    label: "30 лет",
  },
];

const specialOptions: Option[] = [
  {
    value: "one",
    data: {
      percent: 6,
    },
    label: (
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#272B40" }}>6%</h3>
        <h6 style={{ color: "#272B40" }} className={"dropdownOption"}>
          Семейная
        </h6>
      </div>
    ),
  },
  {
    value: "two",
    data: {
      percent: 8,
    },
    label: (
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#272B40" }}>8%</h3>
        <h6 style={{ color: "#272B40" }} className={"dropdownOption"}>
          {"Программа поддержки семей с детьми"}
        </h6>
      </div>
    ),
  },
  {
    value: "three",
    data: {
      percent: 5,
    },
    label: (
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#272B40" }}>5%</h3>
        <h6 style={{ color: "#272B40" }} className={"dropdownOption"}>
          Ипотека для IT
        </h6>
      </div>
    ),
  },
  {
    value: "four",
    data: {
      percent: 18.2,
    },
    label: (
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#272B40" }}>18.2%</h3>
        <h6 style={{ color: "#272B40" }} className={"dropdownOption"}>
          Базовая
        </h6>
      </div>
    ),
  },
];

const calculateMonthlyPayment = (
  loanAmount: number,
  monthlyRate: number,
  loanTermMonths: number,
) => {
  const annuityCoefficient =
    (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
    (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  return loanAmount * annuityCoefficient;
};

export interface IMortgageCalculatorProps {
  prices: IPrice[];
}
export const MortgageCalculator = ({ prices }: IMortgageCalculatorProps) => {
  const options: Option[] = prices.map((item) => {
    return {
      value: item.id!.toString(),
      data: {
        price: item.amount!,
      },
      label: (
        <p style={{ color: "#272B40" }} className={"dropdownOption"}>
          {item.title}
        </p>
      ),
    };
  });
  const [estimate, setEstimate] = useState<number>(20);
  const [price, setPrice] = useState<Option | undefined>(options[0]);
  const [amount, setAmount] = useState<number>(7);
  const [percent, setPercent] = useState<Option>(specialOptions[0]);

  const loanAmount =
    ((price && price?.data?.price && (price.data.price as number)) || 0) -
    amount * 1000000;
  const monthlyRate =
    ((percent && percent?.data?.percent && (percent.data?.percent as number)) ||
      0) /
    100 /
    12; // Переводим процент в доли и месячную ставку
  const loanTermMonths = estimate * 12; // Срок кредита в месяцах

  const monthlyPayment = Math.round(
    calculateMonthlyPayment(loanAmount, monthlyRate, loanTermMonths),
  );

  return (
    <div className={"mortgageCalculator"}>
      <div className={"mortgageSelectors"}>
        <div className={"mortgagePackage"}>
          <div className={"mortgageHeader"}>
            <p style={{ color: "#272B40" }}>Цена</p>
            <Dropdown
              className={"dropdownMortgage dropdownWidth"}
              options={options}
              value={price}
              onChange={(arg) => {
                setPrice(options.find((item) => item.value === arg.value)!);
              }}
              arrowClassName={"dropdownArrow"}
              controlClassName={"dropdownControl"}
              menuClassName={"dropdownMenu"}
            />
          </div>
          <h3 style={{ color: "#272B40" }}>
            {price &&
              price.data?.price &&
              price.data?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
            рублей
          </h3>
          <p style={{ color: "#272B40" }}>
            со скидкой 7% при подписании договора до конца 2023 года
          </p>
          <div className={"mortgageLabel"}>
            <h6 style={{ color: "#272B40" }}>Пакет</h6>
          </div>
        </div>
        <div className={"mortgagePackage"}>
          <div className={"mortgageHeader"}>
            <Dropdown
              className={"dropdownMortgage"}
              options={specialOptions}
              onChange={(arg) => {
                setPercent(
                  specialOptions.find((item) => item.value === arg.value)!,
                );
              }}
              controlClassName={"dropdownControl"}
              arrowClassName={"mortgageArrow"}
              menuClassName={"dropdownMenu"}
              value={"one"}
            />
          </div>
          {/*<h3 style={{ color: "#272B40" }}>3 000 000 рублей</h3>*/}
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#272B40", width: "100%" }}>Срок ипотеки</h5>
            <Slider
              sx={{
                "& .MuiSlider-track": {
                  color: "#00A3FF",
                },
                "& .MuiSlider-mark": {
                  display: "none",
                },
                "& .MuiSlider-markLabel": {
                  color: "#62698C",
                  fontFamily: "'Montserrat', sans-serif",
                  transform: "translateX(-100%)",
                  '&[data-index="0"]': {
                    transform: "none",
                  },
                },
              }}
              getAriaValueText={valuetext}
              min={10}
              max={30}
              step={1}
              value={estimate}
              onChange={(event, value) => {
                setEstimate(typeof value === "number" ? value : 0);
              }}
              valueLabelDisplay="auto"
              marks={marksEstimate}
            />
            <h3 style={{ color: "#272B40", width: "100%" }}>{estimate} лет</h3>
          </div>
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#272B40", width: "100%" }}>
              Первоначальный взнос (можно использовать материнский капитал)
            </h5>
            <Slider
              sx={{
                "& .MuiSlider-track": {
                  color: "#00A3FF",
                },
                "& .MuiSlider-mark": {
                  display: "none",
                },
                "& .MuiSlider-markLabel": {
                  color: "#62698C",
                  fontFamily: "'Montserrat', sans-serif",
                  transform: "translateX(-100%)",
                  '&[data-index="0"]': {
                    transform: "none",
                  },
                },
              }}
              getAriaValueText={valuetext}
              onChange={(event, value) => {
                setAmount(typeof value === "number" ? value : 0);
              }}
              min={5}
              max={15}
              step={0.1}
              value={amount}
              valueLabelDisplay="auto"
              marks={marks}
            />
            <h3 style={{ color: "#272B40", width: "100%" }}>
              {Math.round(amount * 1000000)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              рублей
            </h3>
          </div>
          <div className={"mortgageLabel"}>
            <h6 style={{ color: "#272B40" }}>Условия</h6>
          </div>
        </div>
      </div>
      <div className={"mortgageResult"}>
        {/*
        Формула расчета аннуитетного платежа

Х = С * К

где X — аннуитетный платеж,

С — сумма кредита,

К — коэффициент аннуитета.

Коэффициент аннуитета считается так:

К = (М * (1 + М) ^ S) / ((1 + М) ^ S — 1)

где М — месячная процентная ставка по кредиту,

S — срок кредита в месяцах.*/}
        <div className={"mortgageResultText"}>
          <p style={{ color: "#272B40" }}>Ежемесячный платеж не более</p>
          <h1 style={{ color: "#272B40" }}>{monthlyPayment} рублей</h1>
          <p style={{ color: "#272B40" }}>
            аннуитетные платежи с неизменяемым размером платежа. Добавить текст
            про материнский капитал, если считалось с ним
          </p>
        </div>
        <h6 style={{ color: "#62698C" }}>
          Примерный расчет по данным на 2023 г. Не является публичной офертой.
          Конкретная цифра платежей и ставка ипотеки требует уточнения у банка
          перед заключением договора
        </h6>
      </div>
    </div>
  );
};
