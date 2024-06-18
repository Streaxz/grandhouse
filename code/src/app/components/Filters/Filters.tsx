import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { Checkbox, FormControlLabel, SelectChangeEvent } from "@mui/material";
import { ButtonSmall } from "@/app/components/ButtonSmall/ButtonSmall";
import Dropdown, { Option } from "react-dropdown";

const options: Option[] = [
  {
    value: "one",
    label: (
      <p style={{ color: "#62698C" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
  {
    value: "one",
    label: (
      <p style={{ color: "#62698C" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
  {
    value: "one",
    label: (
      <p style={{ color: "#62698C" }} className={"dropdownOption"}>
        {"one"}
      </p>
    ),
  },
  {
    value: "one",
    label: (
      <p style={{ color: "#62698C" }} className={"dropdownOption"}>
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const floors = [1, 2];

export const Filters = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className={"filters"}>
      <div className={"buttonsContainer"}>
        <button
          className="filtersButton"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span className={"filtersButtonText"} style={{ fontWeight: 300 }}>
            Все проекты
          </span>
          <h6 style={{ textAlign: "left" }}>150 шт.</h6>
        </button>
        <button
          className="filtersButton"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span className={"filtersButtonText"} style={{ fontWeight: 300 }}>
            Из дерева
          </span>
          <h6>150 шт.</h6>
        </button>
        <button
          className="filtersButton"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span className={"filtersButtonText"} style={{ fontWeight: 300 }}>
            Из камня
          </span>
          <h6>150 шт.</h6>
        </button>
        <button
          className="filtersButton"
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <span
            className={"filtersButtonText"}
            style={{
              fontWeight: 300,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Комбинированные
          </span>
          <h6>150 шт.</h6>
        </button>
      </div>
      <div className={"filtersLine"} />
      <div className={"selector"}>
        <h4 style={{ color: "#272B40" }}> Выберите опции</h4>
        <div className={"selectorContainer"}>
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#62698C", width: "100%" }}>Цена, млн ₽</h5>
            <div className={"inputContainer"}>
              <input
                id="nameInput"
                type="priceFrom"
                placeholder="от 6,5"
                className={"inputTiny"}
              />
              <input
                id="nameInput"
                type="priceFrom"
                placeholder="до 12,0"
                className={"inputTiny"}
              />
            </div>
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
          </div>
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#62698C", width: "100%" }}>Цена, млн ₽</h5>
            <div className={"inputContainer"}>
              <input
                id="nameInput"
                type="priceFrom"
                placeholder="от 6,5"
                className={"inputTiny"}
              />
              <input
                id="nameInput"
                type="priceFrom"
                placeholder="до 12,0"
                className={"inputTiny"}
              />
            </div>
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
          </div>
        </div>
        <div className={"selectorContainer"}>
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#62698C", width: "100%" }}>Размеры</h5>
            <div className={"inputContainer"}>
              <input
                id="nameInput"
                type="priceFrom"
                placeholder="от 12 м"
                className={"inputTiny"}
              />
              <input
                id="nameInput"
                type="priceFrom"
                placeholder="до 19 м"
                className={"inputTiny"}
              />
            </div>
          </div>
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#62698C", width: "100%" }}>Этажей</h5>
            <div className={"inputContainer"}>
              {floors.map((v) => (
                <button className={"floor"}>
                  <p style={{ color: "#62698C" }}>{v}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={"specials"}>
          <h5 style={{ color: "#62698C" }}> Особенности</h5>
          <div className={"checkboxContainer"}>
            <FormControlLabel
              style={{ width: "fit-content" }}
              control={<Checkbox />}
              label={
                <h5
                  style={{
                    color: "#62698C",
                    textWrap: "nowrap",
                    paddingTop: "4px",
                  }}
                >
                  С цокольным этажом
                </h5>
              }
            />
            <FormControlLabel
              style={{ width: "fit-content" }}
              control={<Checkbox />}
              label={
                <h5
                  style={{
                    color: "#62698C",
                    textWrap: "nowrap",
                    paddingTop: "4px",
                  }}
                >
                  С гаражом
                </h5>
              }
            />
            <FormControlLabel
              style={{ width: "fit-content" }}
              control={<Checkbox />}
              label={
                <h5
                  style={{
                    color: "#62698C",
                    textWrap: "nowrap",
                    paddingTop: "4px",
                  }}
                >
                  Показать индивидуальные
                </h5>
              }
            />
            <FormControlLabel
              style={{ width: "fit-content" }}
              control={<Checkbox />}
              label={
                <h5
                  style={{
                    color: "#62698C",
                    textWrap: "nowrap",
                    paddingTop: "4px",
                  }}
                >
                  Показать серийные
                </h5>
              }
            />
          </div>
          <Dropdown
            className={"dropdown"}
            options={options}
            onChange={() => {}}
            arrowClassName={"dropdownArrow"}
            controlClassName={"dropdownControl"}
            placeholderClassName={"dropdownPlaceholder"}
            menuClassName={"dropdownMenu"}
            placeholder="Все годы"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <ButtonSmall onClick={() => {}} buttonText={"Показать"} />
        </div>
      </div>
    </div>
  );
};
