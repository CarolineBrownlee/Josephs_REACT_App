import React from 'react';
import { NavBar } from "./NavBar/nav"
import { StickerChart } from "./StickerChart/stickerchart"
import { Prayers } from "./Prayers/prayers"
import { Header } from "./Header/header"
import { Homework } from "./Homework/homework"
// import { Img } from ".johndeerdumptruck.jpg"
import "./josephsapp.css"

export const JosephsApp = () => (
    <>
        <Header />
        <NavBar />
        <h2 className="underConstruction"> This Site is Under Construction</h2>
        {/* <img className="Img" style={{ width: '30%' }} src={Img} /> */}
        <StickerChart />
        <Prayers />
        <Homework />
    </>
)