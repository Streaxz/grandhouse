import Dropdown, { Option } from "react-dropdown";
import React from "react";
import Slider from "@mui/material/Slider";

const options: Option[] = [
  {
    value: "one",
    label: (
      <p style={{ color: "#272B40" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
  {
    value: "one",
    label: (
      <p style={{ color: "#272B40" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
  {
    value: "one",
    label: (
      <p style={{ color: "#272B40" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
  {
    value: "one",
    label: (
      <p style={{ color: "#272B40" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
];

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

const specialOptions: Option[] = [
  {
    value: "one",
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
    value: "two",
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
    value: "four",
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
];

export const MortgageCalculator = () => {
  return (
    <div className={"mortgageCalculator"}>
      <div className={"mortgageSelectors"}>
        <div className={"mortgagePackage"}>
          <div className={"mortgageHeader"}>
            <p style={{ color: "#272B40" }}>Цена</p>
            <Dropdown
              className={"dropdown"}
              options={options}
              onChange={() => {}}
              arrowClassName={"dropdownArrow"}
              controlClassName={"dropdownControl"}
              placeholderClassName={"dropdownPlaceholder"}
              menuClassName={"dropdownMenu"}
              placeholder="Теплый контур"
            />
          </div>
          <h3 style={{ color: "#272B40" }}>3 000 000 рублей</h3>
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
              onChange={() => {}}
              controlClassName={"dropdownControl"}
              arrowClassName={"mortgageArrow"}
              menuClassName={"mortgageMenu"}
              value={"one"}
            />
          </div>
          <h3 style={{ color: "#272B40" }}>3 000 000 рублей</h3>
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
              min={5}
              max={15}
              step={0.1}
              defaultValue={[6.5, 12.0]}
              valueLabelDisplay="auto"
              marks={marks}
            />
            <h3 style={{ color: "#272B40", width: "100%" }}>10 лет</h3>
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
              min={5}
              max={15}
              step={0.1}
              defaultValue={[6.5, 12.0]}
              valueLabelDisplay="auto"
              marks={marks}
            />
            <h3 style={{ color: "#272B40", width: "100%" }}>700 000 рублей</h3>
          </div>
          <div className={"mortgageLabel"}>
            <h6 style={{ color: "#272B40" }}>Условия</h6>
          </div>
        </div>
      </div>
      <div className={"mortgageResult"}>
        <div className={"mortgageResultText"}>
          <p style={{ color: "#272B40" }}>Ежемесячный платеж не более</p>
          <h1 style={{ color: "#272B40" }}>34000 рублей</h1>
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
