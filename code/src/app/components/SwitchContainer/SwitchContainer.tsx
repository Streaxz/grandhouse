import {Switch} from "@mui/material";
import React from "react";

export const SwitchContainer = () => {

		return (
			<div className={'pdfContainer'} style={{flexWrap: "wrap", textAlign: "center"}}>
					<p style={{color: "#272B40"}}>Планировка:</p>
					<div className={'switch'}>
							<h5 style={{color: "#62698C", fontWeight: 300}}>2D</h5>
							<Switch
								sx={{
										'& .MuiSwitch-track': {
												position: "absolute",
												top: 0,
												left: 0,
												backgroundColor: 'unset',
												width: "55px",
												overflow: "visible",
												height: "36px",
												borderRadius: "12px",
												opacity: 1,
												border: "1px solid #62698C",
										},
										'& .MuiSwitch-thumb': {
												color: "#62698C",

										},
										'& .Mui-checked': {
												'& + .MuiSwitch-track': {
														backgroundColor: "rgba(156,198,255,0.69)",
														border: "1px solid #62698C",
														opacity: 1,
												},
										},
								}}
							/>

							<h5 style={{color: "#62698C", fontWeight: 300}}>3D</h5>
					</div>
					<div className={'separateLine'}/>
					<div className={'switch'}>
							<h5 style={{color: "#62698C", fontWeight: 300}}>Вариант №1 </h5>
							<Switch
								sx={{
										'& .MuiSwitch-track': {
												position: "absolute",
												top: 0,
												left: 0,
												backgroundColor: 'unset',
												width: "55px",
												overflow: "visible",
												height: "36px",
												borderRadius: "12px",
												opacity: 1,
												border: "1px solid #62698C",
										},
										'& .MuiSwitch-thumb': {
												color: "#62698C",

										},
										'& .Mui-checked': {
												'& + .MuiSwitch-track': {
														backgroundColor: "rgba(156,198,255,0.69)",
														border: "1px solid #62698C",
														opacity: 1,
												},
										},
								}}
							/>

							<h5 style={{color: "#62698C", fontWeight: 300}}>№2</h5>
					</div>
					<div className={'separateLine'}/>
					<div className={'switch'}>
							<Switch
								sx={{
										'& .MuiSwitch-track': {
												position: "absolute",
												top: 0,
												left: 0,
												backgroundColor: 'unset',
												width: "55px",
												overflow: "visible",
												height: "36px",
												borderRadius: "12px",
												opacity: 1,
												border: "1px solid #62698C",
										},
										'& .MuiSwitch-thumb': {
												color: "#62698C",

										},
										'& .Mui-checked': {
												'& + .MuiSwitch-track': {
														backgroundColor: "rgba(156,198,255,0.69)",
														border: "1px solid #62698C",
														opacity: 1,
												},
										},
								}}
							/>
							<h5 style={{color: "#62698C", fontWeight: 300}}>Зеркально</h5>
					</div>
			</div>
		)
}