import "../../App.css"
import {ArrowIconLeft} from "../../icons/ArrowIconLeft";
import React from "react";
import {ArrowIconRight} from "../../icons/ArrowIconRight";
export const Catalog = () => {
    return (
        <>
            <div className='catalogContainer'>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/logo_catalog.svg`}
                         style={{width: "524px", margin: "0 auto"}}></img>
                    <p style={{fontSize: "24px", paddingTop: "12px"}}>Вводка о каталоге компании до 150 знаков.</p>
                </div>
            </div>
            <div className='catalogCarousel'>
                <ArrowIconLeft/>
                <div style={{display: "flex", flexDirection:"column"}}>
                    <div
                        className='catalogPhoto'
                        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/winter.png)`}}
                    >
                        <div className='catalogContentContainer'>
                            <div style={{display: "flex"}}>
                                <div style={{
                                    background: "rgba(255, 255, 255, 0.75)",
                                    borderRadius: "48px",
                                    height: "41px",
                                    display: "flex",
                                    alignItems: "center"  // Выравнивание по центру по вертикали
                                }}>
                            <span style={{
                                color: "rgba(39, 43, 64, 1)",
                                paddingInline: "24px",
                                fontSize: "24px"
                            }}>Грандхаус зима</span>
                                </div>
                            </div>
                            <div style={{display: "flex", paddingTop: "9px"}}>
                                <div style={{
                                    background: "rgba(39, 43, 64, 0.5)",
                                    borderRadius: "48px",
                                    display: "flex",
                                    textAlign: "center",  // Выравнивание по центру по вертикали,
                                }}>
                            <span style={{
                                padding: "0 12px",
                            }}>Серия времена года</span>
                                </div>
                                <div className='discount' style={{marginLeft: "12px"}}>
                                    <span style={{padding: "0 12px",}}> Скидка! </span>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "block", padding: "24px 24px 0 0"}}>
                            <div style={{
                                background: "rgba(39, 43, 64, 0.5)",
                                borderRadius: "24px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",  // Выравнивание по центру по вертикали,

                            }}>
                            <span style={{
                                padding: "6px 0 0 0",
                            }}>От</span>
                                <span style={{
                                    padding: "0 24px 0",
                                    fontSize: "24px"
                                }}>
                                    10
                                </span>
                                <span style={{
                                    padding: "0 0 6px 0",
                                }}>
                                    млн
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='photoFooter' style={{borderRadius:"0px 0px 24px 24px"}}>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                Каменный
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                Общая 200 м²
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                Жилая 145 м²
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                14×19 м
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                2 сп.
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", paddingRight: "7px"}}>
                                2 c/у
                            </span>
                        </div>

                    </div>
                </div>
                <div style={{display: "flex", flexDirection:"column"}}>
                    <div
                        className='catalogPhoto'
                        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                    >
                        <div className='catalogContentContainer'>
                            <div style={{display: "flex"}}>
                                <div style={{
                                    background: "rgba(255, 255, 255, 0.75)",
                                    borderRadius: "48px",
                                    height: "41px",
                                    display: "flex",
                                    alignItems: "center"  // Выравнивание по центру по вертикали
                                }}>
                            <span style={{
                                color: "rgba(39, 43, 64, 1)",
                                paddingInline: "24px",
                                fontSize: "24px"
                            }}>Грандхаус осень</span>
                                </div>
                            </div>
                            <div style={{display: "flex", paddingTop: "9px"}}>
                                <div style={{
                                    background: "rgba(39, 43, 64, 0.5)",
                                    borderRadius: "48px",
                                    display: "flex",
                                    textAlign: "center",  // Выравнивание по центру по вертикали,
                                }}>
                            <span style={{
                                padding: "0 12px",
                            }}>Серия времена года</span>
                                </div>
                                <div className='discount' style={{marginLeft: "12px"}}>
                                    <span style={{padding: "0 12px",}}> Скидка! </span>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "block", padding: "24px 24px 0 0"}}>
                            <div style={{
                                background: "rgba(39, 43, 64, 0.5)",
                                borderRadius: "24px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",  // Выравнивание по центру по вертикали,

                            }}>
                            <span style={{
                                padding: "6px 0 0 0",
                            }}>От</span>
                                <span style={{
                                    padding: "0 24px 0",
                                    fontSize: "24px"
                                }}>
                                    10
                                </span>
                                <span style={{
                                    padding: "0 0 6px 0",
                                }}>
                                    млн
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='photoFooter' style={{borderRadius:"0px 0px 24px 24px"}}>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                Каменный
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                Общая 200 м²
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                Жилая 145 м²
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                14×19 м
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", borderRight: "1px solid white", paddingRight: "7px"}}>
                                2 сп.
                            </span>
                        </div>
                        <div style={{display:"flex", textAlign:"center", paddingTop: " 12px", paddingBottom: " 12px"}}>
                            <span style={{color:"rgba(39, 43, 64, 1)", paddingRight: "7px"}}>
                                2 c/у
                            </span>
                        </div>

                    </div>
                </div>
                <ArrowIconRight/>
            </div>

            <div style={{display: "inline-flex", paddingTop: "48px", justifyContent: "space-evenly", width: "1316px"}}>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>
                <div
                    className='roundPhoto'
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/autumn.png)`}}
                >
                </div>

            </div>
                    <button className='projectButton'>
                            <span style={{
                                padding: "24px 48px 24px 48px",
                                color: "rgba(39, 43, 64, 1)",
                                fontSize: "48px"

                            }}>Все проекты (240)</span>
                    </button>
        </>
    )
}