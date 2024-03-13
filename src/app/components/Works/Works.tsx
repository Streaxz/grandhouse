"use client";
import React from "react";
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {Button} from "@/app/components/Button/Button";
import {FeatureCardSmallDarkLabel} from "@/app/components/featureCardSmallDarkLabel/FeatureCardSmallDarkLabel";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";

export const Works: React.FC = () => {
    return (
      <div className={'works'}>
          <div className={'worksWrapper'}>
              <TextBlock
                rectangleColor={"#CC00FF"}
                mainText={"Наши работы говорят за себя"}
                descriptionText={"Вводка до 200 знаков. Портфолио Грандхауса включает дома и объекты различной сложности, построенные по всей Западной России. Нас знают в Москве, Нижнем Новгороде и других городах."}
                textColor={"rgba(39, 43, 64, 1)"}
              />
              <div
                className={'worksImageContainer'}
              >
                  <img
                    src={'/map.png'}
                    alt={"500"}
                    style={{width: "100%", position: "absolute", zIndex: 1}}
                  />
                  <div
                       className={'whiteBoxContainer'}
                  >
                      <div className={'whiteBox hiddenWhiteBox'}>
                          <p style={{color: "#272B40"}} className={'whiteBoxText'}>завершенных</p>
                      </div>
                      <div className={'whiteBox'}>
                          <p style={{color: "#272B40"}} className={'whiteBoxText'}>проектов</p>
                      </div>
                      <div className={'whiteBox'}>
                          <p style={{color: "#272B40"}} className={'whiteBoxText'}>в портфолио</p>
                      </div>
                  </div>
              </div>

              <div className={'doubleItem'}>
                  <FeatureCardSmallDarkLabel
                    headerText={"House for a family"}
                    descriptionText={"Нажмите для просмотра"}
                  />
                  <FeatureCardSmallDarkLabel
                    headerText={"House for a family"}
                    descriptionText={"Нажмите для просмотра"}
                  />
              </div>
              <div style={{display: "flex", width: "83%"}}>
              </div>
              <PhotoButton
                backgroundSrc={"https://s3-alpha-sig.figma.com/img/3cf4/f18a/0ad9191b4d506abe39dd109697e63f60?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMq~jf5INhHeEXLlqh9Fm9DI-0jk5qUqojUW2rJLLS7r5M-Jk3nb~Z9dMBtx3DTG1ejcPdfq8x6FtW3snYeu7tN16zd0nc-pFolmMpQIaIyVIjqUhRmrfWFXBuOpxIZ547nROO45U5dbmRGinEwKWXvahu1uFOlymfPtelcGQlHPC6SmT2RC9j4KXF07eMAWqXVw62LjOFMF2Lvk6lUbSvvxsgRMrmWREngJdrcfCWlY9dGBTRLCHg0XRF06hOaf-N8YZwHElAZuxME2xVvP0cANSmTuie~~27ZG5F6X~dMO7W80Jo3dipjk1odc3INtL7FfN2nKQ~SgdDlNa0jrnQ__"}
                buttonSrc={"https://s3-alpha-sig.figma.com/img/0331/b9ca/35b59c5d90199887587d716ed1c17322?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRgJWG0icmQJRH-azL3iZoW0qS9Xj9gg6MFs0rcubg-Bn1na8lyPuIzYWIRKRGQDN82hpkp9J-o4Uw~vSOR0ev3eXgPFVTmwKxfrYoeZXX8sO8C-dqrimv0hLjjBgCvuH39bGH0r0uN5lWhU~Ne9nVSmuntdjTw5BWDgpsiOj3axI62Dn-9~ZLEizzVO7kOOMheMUDUpxI66IpHO46fjsYRXYruHiMXQprBQCS3nAsMygRc5DBdgLNkWsiRQ~kU7SkRQfxtgD0mm-pa0Qta9mxPUJLhheXiRBsH9bmTgsiQNr1wUpWn-6BKauXLASEQ64PeH4ZEgof78QVeUrPGD~Q__"}
                buttonText={"Обсудим ваши идеи?"}
                descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
              />
              <div className="workEllipse"></div>
          </div>
      </div>
    )
}