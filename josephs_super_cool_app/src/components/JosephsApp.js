import React from 'react';
import { NavBar } from "./NavBar/nav"
import { StickerChart } from "./StickerChart/stickerchart"
import { Prayers } from "./Prayers/prayers"
import { Header } from "./Header/header"
import { Homework } from "./Homework/homework"
import profileImg from "./Images/profileImg.jpg"
import "./josephsapp.css"
import useSound from 'use-sound';
import soundEfx from './Images/preview.mp3';

export const JosephsApp = () => {

    const [play] = useSound(soundEfx);

    // function myFunction() {
    //     alert("Great Shot!");
    // }

    return (
        <>
            <Header />
            <NavBar />
            <h2 className="underConstruction"> This Site is Under Construction</h2>
            <img className="dumpTruckImg" style={{ width: '30%' }} src={profileImg} onClick={play} alt={"dump truck"} />
            <StickerChart />
            <Prayers />
            <Homework />
        </>
    )
}

