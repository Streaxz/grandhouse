import { Switch } from "@mui/material";
import React from "react";

export interface ISwitchContainerProps {
  is3D: boolean;
  setIs3D: (arg_0: boolean) => void;
  isMirrored: boolean;
  setIsMirrored: (arg_0: boolean) => void;
}
export const SwitchContainer = ({
  setIs3D,
  setIsMirrored,
  isMirrored,
  is3D,
}: ISwitchContainerProps) => {
  return (
    <div
      className={"pdfContainer"}
      style={{ flexWrap: "wrap", textAlign: "center" }}
    >
      <p style={{ color: "#272B40" }}>Планировка:</p>
      <div className={"switch"}>
        <h5 style={{ color: "#62698C", fontWeight: 300 }}>2D</h5>
        <Switch
          sx={{
            "& .MuiSwitch-track": {
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "unset",
              width: "55px",
              overflow: "visible",
              height: "36px",
              borderRadius: "12px",
              opacity: 1,
              border: "1px solid #62698C",
            },
            "& .MuiSwitch-thumb": {
              color: "#62698C",
            },
            "& .Mui-checked": {
              "& + .MuiSwitch-track": {
                backgroundColor: "rgba(156,198,255,0.69)",
                border: "1px solid #62698C",
                opacity: 1,
              },
            },
          }}
          checked={is3D}
          onChange={() => setIs3D(!is3D)}
        />

        <h5 style={{ color: "#62698C", fontWeight: 300 }}>3D</h5>
      </div>
      <div className={"separateLine"} />
      {/*<div className={"switch"}>*/}
      {/*  <h5 style={{ color: "#62698C", fontWeight: 300 }}>Вариант №1 </h5>*/}
      {/*  <Switch*/}
      {/*    sx={{*/}
      {/*      "& .MuiSwitch-track": {*/}
      {/*        position: "absolute",*/}
      {/*        top: 0,*/}
      {/*        left: 0,*/}
      {/*        backgroundColor: "unset",*/}
      {/*        width: "55px",*/}
      {/*        overflow: "visible",*/}
      {/*        height: "36px",*/}
      {/*        borderRadius: "12px",*/}
      {/*        opacity: 1,*/}
      {/*        border: "1px solid #62698C",*/}
      {/*      },*/}
      {/*      "& .MuiSwitch-thumb": {*/}
      {/*        color: "#62698C",*/}
      {/*      },*/}
      {/*      "& .Mui-checked": {*/}
      {/*        "& + .MuiSwitch-track": {*/}
      {/*          backgroundColor: "rgba(156,198,255,0.69)",*/}
      {/*          border: "1px solid #62698C",*/}
      {/*          opacity: 1,*/}
      {/*        },*/}
      {/*      },*/}
      {/*    }}*/}
      {/*  />*/}

      {/*  <h5 style={{ color: "#62698C", fontWeight: 300 }}>№2</h5>*/}
      {/*</div>*/}
      {/*<div className={"separateLine"} />*/}
      <div className={"switch"}>
        <Switch
          sx={{
            "& .MuiSwitch-track": {
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "unset",
              width: "55px",
              overflow: "visible",
              height: "36px",
              borderRadius: "12px",
              opacity: 1,
              border: "1px solid #62698C",
            },
            "& .MuiSwitch-thumb": {
              color: "#62698C",
            },
            "& .Mui-checked": {
              "& + .MuiSwitch-track": {
                backgroundColor: "rgba(156,198,255,0.69)",
                border: "1px solid #62698C",
                opacity: 1,
              },
            },
          }}
          checked={isMirrored}
          onChange={() => setIsMirrored(!isMirrored)}
        />
        <h5 style={{ color: "#62698C", fontWeight: 300 }}>Зеркально</h5>
      </div>
    </div>
  );
};
