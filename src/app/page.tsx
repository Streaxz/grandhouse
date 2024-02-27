import { MainLogo } from "@/app/icons/MainLogo";
import { MainHeader } from "@/app/components/MainHeader/MainHeader";
import { PhotoCarousel } from "@/app/components/PhotoCarousel/PhotoCarousel";
import { Navigation } from "@/app/components/Navigation/Navigation";
import { Catalog } from "@/app/components/Catalog/Catalog";
import {Works} from "@/app/components/Works/Works";
import React from "react";
import {Company} from "@/app/components/Company/Company";

export default function Home() {
    return (
        <main className="App flex flex-col items-center justify-center min-h-screen -z-30">
            <div className="gradient flex items-center justify-center">
                <MainLogo />
                <MainHeader />
                <PhotoCarousel />
                <Navigation />
                <Catalog />
            </div>
            <div className="ellipse h-16 w-16"></div>
            <Works/>
            <Company/>
        </main>
    );
}
