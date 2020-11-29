import React from 'react';
import { NavBar } from "./NavBar/nav"
// import { Prayers } from "./Prayers/prayers"
import { Header } from "./Header/header"
// import { Homework } from "./Homework/homework"
// import profileImg from "./Images/profileImg.jpg"
import "./josephsapp.css"
// import useSound from 'use-sound';
// import soundEfx from './Images/preview.mp3';
import { ApplicationViews } from './ApplicationViews';

export const JosephsApp = () => {

    return (
        <>
            <Header />
            <NavBar />
            <ApplicationViews />
                {/* <h2 className="underConstruction"> This Site is Under Construction</h2>
                <img className="dumpTruckImg" style={{ width: '30%' }} src={profileImg} onClick={play} alt={"dump truck"} /> */}
            {/* <Prayers />
            <Homework /> */}
        </>
    )
}

