"use client";
import React from "react";
import {Shortcuts} from "@/app/components/Shortcuts/Shorcuts";
import {ShortcutItem} from "@/app/components/ShortcutItem/ShortcutItem";
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {LabelBackground, Photo} from "@/app/components/PhotoCarousel/Photo";
import {Button} from "@/app/components/Button/Button";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";

export const Works: React.FC = () => {
    return (
        <div className={'works'}>
            <Shortcuts
                backgroundColor={"white"}
            >
                <ShortcutItem
                    src={"https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKnhS2-oTV6maWtIDHqBlAIBHiYllKFiFkhlB7x-tU~BwMU0-RuozfQLaANWYuqRFozW2VoymVj7p8eLTGAH4xpGDbBdYMCQNuuAp3nBXlIE5ntW~gJyQtBd5LkIvVgr80eTHPIWBn6oy-uSC7LVMSYAI4os3Kd9Z18iV~~mAWL5-ZYhkHPhF6QU4b2lVFhhSM7v-agP~Di9IPbNX91gtC9eUT7XDxtRpH-pDat8Lzlj6rqbPQRN6xAxUNrAGsJ7G-rxmXxMmHY1Y0Utm6wqPcmbYMLY3I3F7fiSh1Vf0Fz~uZmuq7UTsNVrkz3W9X2Mtk8aW1gUmvMLCOZzEpt7EA__"}
                    title={"test"}
                    description={"testsetstets"}
                    color={"black"}
                    descriptionColor={"rgba(98, 105, 140, 1)"}
                />
                <ShortcutItem
                    src={"https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKnhS2-oTV6maWtIDHqBlAIBHiYllKFiFkhlB7x-tU~BwMU0-RuozfQLaANWYuqRFozW2VoymVj7p8eLTGAH4xpGDbBdYMCQNuuAp3nBXlIE5ntW~gJyQtBd5LkIvVgr80eTHPIWBn6oy-uSC7LVMSYAI4os3Kd9Z18iV~~mAWL5-ZYhkHPhF6QU4b2lVFhhSM7v-agP~Di9IPbNX91gtC9eUT7XDxtRpH-pDat8Lzlj6rqbPQRN6xAxUNrAGsJ7G-rxmXxMmHY1Y0Utm6wqPcmbYMLY3I3F7fiSh1Vf0Fz~uZmuq7UTsNVrkz3W9X2Mtk8aW1gUmvMLCOZzEpt7EA__"}
                    title={"test"}
                    description={"testsetstets"}
                    color={"black"}
                    descriptionColor={"rgba(98, 105, 140, 1)"}
                />
                <ShortcutItem
                    src={"https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKnhS2-oTV6maWtIDHqBlAIBHiYllKFiFkhlB7x-tU~BwMU0-RuozfQLaANWYuqRFozW2VoymVj7p8eLTGAH4xpGDbBdYMCQNuuAp3nBXlIE5ntW~gJyQtBd5LkIvVgr80eTHPIWBn6oy-uSC7LVMSYAI4os3Kd9Z18iV~~mAWL5-ZYhkHPhF6QU4b2lVFhhSM7v-agP~Di9IPbNX91gtC9eUT7XDxtRpH-pDat8Lzlj6rqbPQRN6xAxUNrAGsJ7G-rxmXxMmHY1Y0Utm6wqPcmbYMLY3I3F7fiSh1Vf0Fz~uZmuq7UTsNVrkz3W9X2Mtk8aW1gUmvMLCOZzEpt7EA__"}
                    title={"test"}
                    description={"testsetstets"}
                    color={"black"}
                    descriptionColor={"rgba(98, 105, 140, 1)"}
                />
            </Shortcuts>
            <TextBlock
                rectangleColor={"#CC00FF"}
                mainText={"Наши работы говорят за себя"}
                descriptionText={"testsetstest"}
                textColor={"rgba(39, 43, 64, 1)"}
                paddingTop={"4vw"}
            />
            <img
                src={"https://s3-alpha-sig.figma.com/img/7679/e147/608a871df329ff6ace8accf89fdd02bd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gimzo3kTqQ6BIOZP~Fbau6XWubQ6mN6HeWJeGv0Rf~rAfpchilVmerHy6WHl7exkYW55RJVKPtvRPCHDCQfo8eg9NGOnGdfbl9eo7K7VUrh9e0C9P4JCCpRyjbpCV6Kuy6WiUO65A0PqFju7~frMuqQu66l9bKWpgpDlG552P6Slco--8tcE-r-8Gtjqu9nE8mmUmqMPw2qf0qp3tjOqS9nPcoJmz0MxTTRe5m3fnyA9oiWG7cuPazre06Ly9MV8sT73pfMLOyfvNXm~VcbF8cknwr9bLF4Mu04TQca8NSjVtLg84MZ~x7pBcfPvEemgvgSjpDIYiaCMfddcf-Lp8Q__"}
                alt={"number"}
                style={{width: "83%", position: "relative", zIndex: 1}}
            />
            <div
                style={{width: "83%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem"}}>
                <div className={'photoRow'}>
                    <Photo
                        labelBackground={LabelBackground.BLACK}
                        labelText={"Новый проект"}
                        headerText={"House for a family"}
                        descriptionText={"Нажмите для просмотра"}

                    />
                </div>
                <div className={'photoRow'}>
                    <Photo
                        labelBackground={LabelBackground.BLACK}
                        labelText={"Новый проект"}
                        headerText={"House for a family"}
                        descriptionText={"Нажмите для просмотра"}
                    /></div>
            </div>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "12vw"}}>
            <Button
                onClick={() => {
                    console.log("click!")
                }}
                buttonText={"Архив и карта работ"}
            />
            </div>
            <div style={{display: "flex", width: "83%"}}>
            <PhotoButton
                backgroundSrc={"https://s3-alpha-sig.figma.com/img/3cf4/f18a/0ad9191b4d506abe39dd109697e63f60?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMq~jf5INhHeEXLlqh9Fm9DI-0jk5qUqojUW2rJLLS7r5M-Jk3nb~Z9dMBtx3DTG1ejcPdfq8x6FtW3snYeu7tN16zd0nc-pFolmMpQIaIyVIjqUhRmrfWFXBuOpxIZ547nROO45U5dbmRGinEwKWXvahu1uFOlymfPtelcGQlHPC6SmT2RC9j4KXF07eMAWqXVw62LjOFMF2Lvk6lUbSvvxsgRMrmWREngJdrcfCWlY9dGBTRLCHg0XRF06hOaf-N8YZwHElAZuxME2xVvP0cANSmTuie~~27ZG5F6X~dMO7W80Jo3dipjk1odc3INtL7FfN2nKQ~SgdDlNa0jrnQ__"}
                buttonSrc={"https://s3-alpha-sig.figma.com/img/0331/b9ca/35b59c5d90199887587d716ed1c17322?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SuBL5HonaWdTGZSoVNXgNBfMd5IInsgcWG7nSBmXn6J6bljxWI-2CYBWLOgYo-LfCbnAvyzexqSXM6NzWWJ2HIKShkKS5HKcuXtkK4Q-nBpltlhUIpfGQocdk~v9s08ta4zIB9ZGp1DekNgHWfge3hLHYImwdgFCGuPPe4IctoAnZBMmjD3ogiKFWQVG24MoT66~64fgJJBAQwsRYhmwbGLrpI6DtwPVZAZpw04sfDgiACd7vrJnXxLWURHJiYq32bu-pL1OxqcYMfisZg2guQW97s-upJsRwaoqnyrPRZzoxubz9qqk~TZeveaIYqHHWUQDSlWYgAgkLAXoGHxCvg__"}
                buttonText={"Обсудим ваши идеи?"}
                descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
            />
            </div>
            <div className="workEllipse h-16 w-16"></div>
        </div>
    )
}