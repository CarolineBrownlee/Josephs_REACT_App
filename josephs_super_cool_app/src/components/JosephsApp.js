import React from 'react';
import { NavBar } from "./NavBar/nav"
import { StickerChart } from "./StickerChart/stickerchart"
import { Prayers } from "./Prayers/prayers"
import { Header } from "./Header/header"
import { Homework } from "./Homework/homework"
import { DumpTruck } from "./Images/dumptruck.jpg"
import "./josephsapp.css"

export const JosephsApp = () => (
    <>
        <Header />
        <NavBar />
        <h2 className="underConstruction"> This Site is Under Construction</h2>
        <img className="dumptruck" style={{ width: '30%' }} src={DumpTruck} />
        <StickerChart />
        <Prayers />
        <Homework />
    </>
)