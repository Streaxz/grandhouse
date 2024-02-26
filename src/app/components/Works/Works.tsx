import {MainHeader} from "@/app/components/MainHeader/MainHeader";
import React from "react";
import {Shortcuts} from "@/app/components/Shortcuts/Shorcuts";
import {ShortcutItem} from "@/app/components/ShortcutItem/ShortcutItem";
import {TextBlock} from "@/app/components/TextBlock/TextBlock";
import {Photo} from "@/app/components/PhotoCarousel/Photo";

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
                />
                <ShortcutItem
                    src={"https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKnhS2-oTV6maWtIDHqBlAIBHiYllKFiFkhlB7x-tU~BwMU0-RuozfQLaANWYuqRFozW2VoymVj7p8eLTGAH4xpGDbBdYMCQNuuAp3nBXlIE5ntW~gJyQtBd5LkIvVgr80eTHPIWBn6oy-uSC7LVMSYAI4os3Kd9Z18iV~~mAWL5-ZYhkHPhF6QU4b2lVFhhSM7v-agP~Di9IPbNX91gtC9eUT7XDxtRpH-pDat8Lzlj6rqbPQRN6xAxUNrAGsJ7G-rxmXxMmHY1Y0Utm6wqPcmbYMLY3I3F7fiSh1Vf0Fz~uZmuq7UTsNVrkz3W9X2Mtk8aW1gUmvMLCOZzEpt7EA__"}
                    title={"test"}
                    description={"testsetstets"}
                    color={"black"}
                />
                <ShortcutItem
                    src={"https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKnhS2-oTV6maWtIDHqBlAIBHiYllKFiFkhlB7x-tU~BwMU0-RuozfQLaANWYuqRFozW2VoymVj7p8eLTGAH4xpGDbBdYMCQNuuAp3nBXlIE5ntW~gJyQtBd5LkIvVgr80eTHPIWBn6oy-uSC7LVMSYAI4os3Kd9Z18iV~~mAWL5-ZYhkHPhF6QU4b2lVFhhSM7v-agP~Di9IPbNX91gtC9eUT7XDxtRpH-pDat8Lzlj6rqbPQRN6xAxUNrAGsJ7G-rxmXxMmHY1Y0Utm6wqPcmbYMLY3I3F7fiSh1Vf0Fz~uZmuq7UTsNVrkz3W9X2Mtk8aW1gUmvMLCOZzEpt7EA__"}
                    title={"test"}
                    description={"testsetstets"}
                    color={"black"}
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
            <div style={{width: "83%", display: "flex"}}>
                <Photo/>
                <Photo/>
            </div>
            {/*<Image/>*/}
            {/*<PhotoTextHorizontal/>*/}
            {/*<div>*/}
            {/*    <Photo/>*/}
            {/*    <Photo/>*/}
            {/*</div>*/}
            {/*<Button/>*/}
            {/*<PhotoButton/>*/}
            {/*<gradient/>*/}
            <div className="workEllipse h-16 w-16"></div>
        </div>
    )
}