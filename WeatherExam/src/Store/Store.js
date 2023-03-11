import { createContext, useState } from "react";

export const context = createContext(null)

export default function Store({ children }) {

    const globalState = {
        lsCityState: useState([]),
        lsWeatherState: useState([])
    }
    return (
        <context.Provider value={globalState}>
            {children}
        </context.Provider>
    )
}
