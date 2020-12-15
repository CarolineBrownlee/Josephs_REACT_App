import React, { useContext, useEffect } from "react"
import { StickerContext } from "./StickerProvider"
import { StickerChart } from "./stickerchart"
import "./stickerchart.css"

export const StickerList = () => {
    // This state changes when `getLocations()` is invoked below
    const { stickers, getStickers } = useContext(StickerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("StickerList: Initial render before data")
        getStickers()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("StickerList: Sticker state changed")
        console.log(stickers)
    }, [stickers])

    return (
        <div className="stickers">
        {
            stickers.map(sticker => <StickerChart key={sticker.id} sticker={sticker} />)
        }
        </div>
    )
}