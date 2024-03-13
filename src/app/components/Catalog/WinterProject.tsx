import React from "react";

export const WinterProject = () => {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <div
            className='catalogPhoto'
            style={{backgroundImage: `url(/winter.png)`, height: '36vw'}}
          >
              <div className='catalogContentContainer'>
                  <div style={{display: "flex"}}>
                      <div className={'projectHeaderContainer'}>
                          <span className={'projectHeader'}>Грандхаус зима</span>
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
          </div>
          <div className='photoFooter'>
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