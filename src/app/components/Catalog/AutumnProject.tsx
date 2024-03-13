import React from "react";

export const AutumnProject = () => {
    return (
      <div style={{maxHeight: "468px", display: "flex", flexDirection: "column"}}>
          <div
            className='catalogPhoto'
            style={{backgroundImage: `url(/autumn.png)`,}}
          >
              <div className='catalogContentContainer'>
                  <div>
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
                      <div className={'amountContainer'}>
                          <h6 style={{lineHeight:"12px"}}>От</h6>
                          <p style={{lineHeight:"29px"}}>
                              10,0
                          </p>
                          <h6 style={{lineHeight:"10px"}}>
                              млн
                          </h6>
                      </div>
              </div>
          </div>
          <div className='photoFooter' style={{borderRadius: "0px 0px 24px 24px"}}>
              <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                  <h6 className={'footerText h3'}>
                      Общая 200 м²
                  </h6>
              </div>
              <div style={{width: "1px", height: "24px", backgroundColor: "white", alignSelf:"center"}}/>
              <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                  <h6 className={'footerText h6'}>
                      Жилая 145 м²
                  </h6>
              </div>
              <div style={{width: "1px", height: "24px", backgroundColor: "white", alignSelf:"center"}}/>
              <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                  <h6 className={'footerText h6'}>
                      14×19 м
                  </h6>
              </div>
              <div style={{width: "1px", height: "24px", backgroundColor: "white", alignSelf:"center"}}/>
              <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                  <h6 className={'footerText h6'}>
                      2 сп.
                  </h6>
              </div>
              <div style={{width: "1px", height: "24px", backgroundColor: "white", alignSelf:"center"}}/>
              <div style={{display: "flex", textAlign: "center", paddingTop: " 1vw", paddingBottom: " 1vw"}}>
                  <h6 className={'lastFooterText h6'}>
                      2 c/у
                  </h6>
              </div>

          </div>
      </div>
    )
}