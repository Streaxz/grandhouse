import React from "react";

export const AutumnProject = () => {
    return (
        <div className={'flex flex-col'}>
            <div
                className='catalogPhoto'
                style={{backgroundImage: `url(/autumn.png)`}}
            >
                <div className='catalogContentContainer'>
                    <div style={{display: "flex"}}>
                        <div className={'projectHeaderContainer'}>
                            <span className={'projectHeader'}>Грандхаус осень</span>
                        </div>
                    </div>
                    <div style={{display: "flex", paddingTop: "9px"}}>
                        <div className={'projectSeriesContainer'}>
                            <span className={'projectSeries'}>Серия времена года</span>
                        </div>
                        <div className='projectDiscount' style={{marginLeft: "12px"}}>
                            <span className={'projectDiscountText'}> Скидка! </span>
                        </div>
                    </div>
                </div>
                <div style={{display: "block", padding: "2vw 2vw 0 0"}}>
                    <div className={'amountContainer'}>
                            <span className={'amountFrom'}>От</span>
                        <span className={'amountNumber'}>
                                    10
                                </span>
                        <span className={'amountMillions'}>
                                    млн
                                </span>
                    </div>
                </div>
            </div>
            <div className='photoFooter' style={{borderRadius: "0px 0px 2vw 2vw"}}>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText'}>
                                Каменный
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText'}>
                                Общая 200 м²
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText'}>
                                Жилая 145 м²
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText'}>
                                14×19 м
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText'}>
                                2 сп.
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'lastFooterText'}>
                                2 c/у
                            </span>
                </div>

            </div>
        </div>
    )
}