import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const StickerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const StickerProvider = (props) => {
    const [stickers, setStickers] = useState([])

    const getStickers = () => {
        return fetch("http://localhost:8088/stickers")
            .then(res => res.json())
            .then(setStickers)
    }

    const addSticker = sticker => {
        return fetch("http://localhost:8088/stickers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sticker)
        })
            .then(getStickers)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <StickerContext.Provider value={{
            stickers, addSticker, getStickers
        }}>
            {props.children}
        </StickerContext.Provider>
    )
}