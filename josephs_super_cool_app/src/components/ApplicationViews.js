import React from "react"
import { Route } from "react-router-dom"
// import { JosephsApp } from "./JosephsApp"
import { StickerChart } from "./StickerChart/stickerchart"
import { Prayers } from "./Prayers/prayers"
import { Homework } from "./Homework/homework"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* <Route exact path="/">
                <JosephsApp />
            </Route> */}
            <Route path="/stickerchart">
                <StickerChart />
            </Route>
            <Route path="/prayers">
                <Prayers />
            </Route>
            <Route path="/homework">
                <Homework />
            </Route>
        </>
    )
}