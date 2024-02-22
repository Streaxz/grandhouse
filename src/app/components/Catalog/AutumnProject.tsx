import React from "react";

export const AutumnProject = () => {
    return (
        <div className={'flex flex-col'}>
            <div
                className='catalogPhoto'
                style={{backgroundImage: `url(/autumn.png)`, height: '36vw'}}
            >
                <div className='catalogContentContainer'>
                    <div style={{display: "flex"}}>
                        <div className={'projectHeaderContainer'}>
                            <h4 className={'projectHeader'}>Грандхаус осень</h4>
                        </div>
                    </div>
                    <div style={{display: "inline-flex", paddingTop: "9px"}}>
                        <div className={'projectSeriesContainer'}>
                            <h6 className={'projectSeries'}>Серия времена года</h6>
                        </div>
                        <div className='projectDiscount' style={{marginLeft: "12px"}}>
                            <h6 className={'projectDiscountText'}> Скидка! </h6>
                        </div>
                    </div>
                </div>
                <div style={{display: "block", padding: "2vw 2vw 0 0"}}>
                    <div className={'amountContainer'}>
                            <h6 className={'amountFrom'}>От</h6>
                        <p className={'amountNumber'}>
                                    10
                                </p>
                        <h6 className={'amountMillions'}>
                                    млн
                                </h6>
                    </div>
                </div>
            </div>
            <div className='photoFooter' style={{borderRadius: "0px 0px 2vw 2vw"}}>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText h3'}>
                                Общая 200 м²
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText h3'}>
                                Жилая 145 м²
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText h3'}>
                                14×19 м
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'footerText h3'}>
                                2 сп.
                            </span>
                </div>
                <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                            <span className={'lastFooterText h3'}>
                                2 c/у
                            </span>
                </div>

            </div>
        </div>
    )
}