import React from 'react';
import { NavBar } from "./NavBar/nav"
import { Header } from "./Header/header"
import "./josephsapp.css"
// import useSound from 'use-sound';
// import soundEfx from './Images/preview.mp3';
import { ApplicationViews } from './ApplicationViews';
// import { profileImg } from './Images/profileImg.jpg';

export const JosephsApp = () => {

    // const [play] = useSound(soundEfx);

    return (
        <>
            <h2 className="underConstruction"> This Site is Under Construction</h2>
            <Header />
            <NavBar />
            <ApplicationViews />
            {/* <img className="dumpTruckImg" style={{ width: '30%' }} src={profileImg} onClick={play} alt={"dump truck"} /> */}
        </>
    )
}

