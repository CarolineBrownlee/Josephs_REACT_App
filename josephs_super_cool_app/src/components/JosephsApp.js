import React from 'react';
import { NavBar } from "./NavBar/nav"
import { GoodBehavior } from "./StickerChart/goodbehavior"
import { Prayers } from "./Prayers/prayers"
import { Header } from "./Header/header"
import "./josephsapp.css"

export const JosephsApp = () => (
    <>
        <Header />
        <h2>This Site is Under Construction</h2>
        <NavBar />
        <GoodBehavior />
        <Prayers />
    </>
)