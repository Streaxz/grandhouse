import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {MainLogo} from "./icons/MainLogo";
import {MainHeader} from "./Components/MainHeader/MainHeader";
import {PhotoCarousel} from "./Components/PhotoCarousel/PhotoCarousel";
import {Navigation} from "./Components/Navigation/Navigation";
import {Catalog} from "./Components/Catalog/Catalog";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="gradient">

                <div style={{display: "flex", alignItems: "center",  flexDirection: "column"}}>
                    <div style={{padding: "48px 96px 0px 96px",}}>
                        <MainLogo/>
                    </div>
                    <MainHeader/>
                    <PhotoCarousel/>
                    <Navigation/>
                    <Catalog/>

                </div>
            </div>
            <div className="rectangle"/>
            <div className="ellipse"></div>
        </div>
    );
}

export default App;
