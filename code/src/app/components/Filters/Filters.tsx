import React from "react";
import Slider from "@mui/material/Slider";
import { Checkbox, FormControlLabel } from "@mui/material";
import { ButtonSmall } from "@/app/components/ButtonSmall/ButtonSmall";
import Dropdown, { Option } from "react-dropdown";
import { ETYPE, IFilters } from "@/app/catalog/page";

const options: Option[] = [
  {
    value: "one",
    label: (
      <h5 style={{ color: "#62698C" }} className={"dropdownYearOption"}>
        {"one"}
      </h5>
    ),
  },
  {
    value: "one",
    label: (
      <h5 style={{ color: "#62698C" }} className={"dropdownYearOption"}>
        {"one"}
      </h5>
    ),
  },
  {
    value: "one",
    label: (
      <h5 style={{ color: "#62698C" }} className={"dropdownYearOption"}>
        {"one"}
      </h5>
    ),
  },
  {
    value: "one",
    label: (
      <h5 style={{ color: "#62698C" }} className={"dropdownYearOption"}>
        {"one"}
      </h5>
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

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const floors = [1, 2];

export interface IFiltersProps {
  filters: IFilters;
  setFilters: (arg_0: IFilters) => void;
  getProjects(filters?: IFilters): Promise<void>;
}
export const Filters = ({
  filters,
  setFilters,
  getProjects,
}: IFiltersProps) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const [age, setAge] = React.useState("");
  // console.log(isChecked, age);
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  console.log(filters);
  return (
    <div className={"filters"}>
      <div className={"buttonsContainer"}>
        <button
          className={`filtersButton ${filters.type === ETYPE.ALL ? `activeBackground` : `normalBackground`}`}
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => {
            console.log(filters);
            setFilters({
              ...filters,
              type: filters.type === ETYPE.ALL ? undefined : ETYPE.ALL,
            });
          }}
        >
          <span className={"filtersButtonText"} style={{ fontWeight: 300 }}>
            Все проекты
          </span>
          <h6 style={{ textAlign: "left" }}>150 шт.</h6>
        </button>
        <button
          className={`filtersButton ${filters.type === ETYPE.WOOD ? `activeBackground` : `normalBackground`}`}
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => {
            setFilters({
              ...filters,
              type: filters.type === ETYPE.WOOD ? undefined : ETYPE.WOOD,
            });
          }}
        >
          <span className={"filtersButtonText"} style={{ fontWeight: 300 }}>
            Из дерева
          </span>
          <h6>150 шт.</h6>
        </button>
        <button
          className={`filtersButton ${filters.type === ETYPE.STONE ? `activeBackground` : `normalBackground`}`}
          style={{ display: "flex", flexDirection: "column" }}
          onClick={() => {
            setFilters({
              ...filters,
              type: filters.type === ETYPE.STONE ? undefined : ETYPE.STONE,
            });
          }}
        >
          <span className={"filtersButtonText"} style={{ fontWeight: 300 }}>
            Из камня
          </span>
          <h6>150 шт.</h6>
        </button>
        <button
          className={`filtersButton ${filters.type === ETYPE.COMBINED ? `activeBackground` : `normalBackground`}`}
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          onClick={() => {
            setFilters({
              ...filters,
              type:
                filters.type === ETYPE.COMBINED ? undefined : ETYPE.COMBINED,
            });
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
                value={filters.priceFrom}
                placeholder="от 6,5"
                className={"inputTiny"}
                onChange={(event) => {
                  setFilters({
                    ...filters,
                    priceFrom:
                      event.target.value === ""
                        ? undefined
                        : parseInt(event.target.value),
                  });
                }}
              />
              <input
                id="nameInput"
                type="priceTo"
                placeholder="до 12,0"
                className={"inputTiny"}
                value={filters.priceTo}
                onChange={(event) => {
                  setFilters({
                    ...filters,
                    priceTo:
                      event.target.value === ""
                        ? undefined
                        : parseInt(event.target.value),
                  });
                }}
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
              value={[filters.priceFrom || 6.5, filters.priceTo || 12]}
              onChange={(event, value) => {
                console.log(filters);
                setFilters({
                  ...filters,
                  priceFrom: value[0],
                  priceTo: value[1],
                });
              }}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </div>
          {/*<div className={"selectorPrice"}>*/}
          {/*  <h5 style={{ color: "#62698C", width: "100%" }}>Цена, млн ₽</h5>*/}
          {/*  <div className={"inputContainer"}>*/}
          {/*    <input*/}
          {/*      id="nameInput"*/}
          {/*      type="priceFrom"*/}
          {/*      placeholder="от 6,5"*/}
          {/*      className={"inputTiny"}*/}
          {/*    />*/}
          {/*    <input*/}
          {/*      id="nameInput"*/}
          {/*      type="priceFrom"*/}
          {/*      placeholder="до 12,0"*/}
          {/*      className={"inputTiny"}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*  <Slider*/}
          {/*    sx={{*/}
          {/*      "& .MuiSlider-track": {*/}
          {/*        color: "#00A3FF",*/}
          {/*      },*/}
          {/*      "& .MuiSlider-mark": {*/}
          {/*        display: "none",*/}
          {/*      },*/}
          {/*      "& .MuiSlider-markLabel": {*/}
          {/*        color: "#62698C",*/}
          {/*        fontFamily: "'Montserrat', sans-serif",*/}
          {/*        transform: "translateX(-100%)",*/}
          {/*        '&[data-index="0"]': {*/}
          {/*          transform: "none",*/}
          {/*        },*/}
          {/*      },*/}
          {/*    }}*/}
          {/*    getAriaValueText={valuetext}*/}
          {/*    min={5}*/}
          {/*    max={15}*/}
          {/*    step={0.1}*/}
          {/*    valueLabelDisplay="auto"*/}
          {/*    marks={marks}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
        <div className={"selectorContainer"}>
          <div className={"selectorPrice"}>
            <h5 style={{ color: "#62698C", width: "100%" }}>Размеры</h5>
            <div className={"inputContainer"}>
              <input
                id="nameInput"
                type="squareFrom"
                placeholder="от 12 м"
                className={"inputTiny"}
                value={filters.squareFrom}
                onChange={(event) => {
                  console.log(event);
                  setFilters({
                    ...filters,
                    squareFrom:
                      event.target.value === ""
                        ? undefined
                        : parseInt(event.target.value),
                  });
                }}
              />
              <input
                id="nameInput"
                type="squareTo"
                placeholder="до 19 м"
                className={"inputTiny"}
                value={filters.squareTo}
                onChange={(event) => {
                  setFilters({
                    ...filters,
                    squareTo:
                      event.target.value === ""
                        ? undefined
                        : parseInt(event.target.value),
                  });
                }}
              />
            </div>
          </div>

          <div className={"selectorPrice"}>
            <h5 style={{ color: "#62698C", width: "100%" }}>Этажей</h5>
            <div className={"inputContainer"}>
              {floors.map((v) => (
                <button
                  className={`floor ${filters.floor === v ? "activeFloor" : "normalFloor"}`}
                  onClick={() => {
                    setFilters({
                      ...filters,
                      floor: v === filters.floor ? undefined : v,
                    });
                  }}
                >
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
              checked={filters.isBasement}
              onChange={() => {
                setFilters({
                  ...filters,
                  isBasement: !filters.isBasement,
                });
              }}
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
              checked={filters.isGarage}
              onChange={() => {
                setFilters({
                  ...filters,
                  isBasement: !filters.isGarage,
                });
              }}
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
              checked={filters.isIndividual}
              onChange={() => {
                setFilters({
                  ...filters,
                  isIndividual: !filters.isIndividual,
                });
              }}
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
                  В архиве
                </h5>
              }
              checked={filters.isArchive}
              onChange={() => {
                setFilters({
                  ...filters,
                  isArchive: !filters.isArchive,
                });
              }}
            />
            {/*TODO: узнать о свойстве "Серийный"*/}
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
              checked={filters.isSerial}
              onChange={() => {
                setFilters({
                  ...filters,
                  isSerial: !filters.isSerial,
                });
              }}
            />
          </div>
          <Dropdown
            className={"dropdownMortgage darkColor dropdownWidth"}
            options={options}
            onChange={() => {}}
            placeholderClassName={"darkColor"}
            arrowClassName={"dropdownArrow"}
            controlClassName={"dropdownControl"}
            menuClassName={"dropdownMenu"}
            placeholder="Все годы"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <ButtonSmall
            onClick={async () => {
              await getProjects(filters);
            }}
            buttonText={"Показать"}
          />
        </div>
      </div>
    </div>
  );
};
