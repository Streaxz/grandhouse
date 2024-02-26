import {MainLogo} from "@/app/icons/MainLogo";
import {MainHeader} from "@/app/components/MainHeader/MainHeader";
import {PhotoCarousel} from "@/app/components/PhotoCarousel/PhotoCarousel";
import {Navigation} from "@/app/components/Navigation/Navigation";
import {Catalog} from "@/app/components/Catalog/Catalog";
import React from "react";
import {Works} from "@/app/components/Works/Works";

export const Intro = () => {
    return (
        <div>
            <div className="gradient">
                <MainLogo/>
                <MainHeader/>
                <PhotoCarousel/>
                <Navigation/>
                <Catalog/>
            </div>
            <div className="ellipse"></div>

        </div>
    )
}