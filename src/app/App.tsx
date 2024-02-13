import React from 'react';
import './App.css';
import {MainLogo} from "./icons/MainLogo";
import {MainHeader} from "@/app/components/MainHeader/MainHeader";
import {PhotoCarousel} from "@/app/components/PhotoCarousel/PhotoCarousel";
import {Navigation} from "@/app/components/Navigation/Navigation";
import {Catalog} from "@/app/components/Catalog/Catalog";

function App() {
    return (
        <div className="App">
            <div className="gradient">
                    <MainLogo/>
                    <MainHeader/>
                    <PhotoCarousel/>
                    <Navigation/>
                    <Catalog/>
            </div>

            <div className="ellipse"></div>
        </div>
    );
}

export default App;
