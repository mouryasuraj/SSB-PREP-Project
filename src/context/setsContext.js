import { createContext, useContext } from "react";


export const setsContext = createContext(
    {
        words:'hello',
        handleStartTest:()=>{}
    }
)


export const SetContextProvider = setsContext.Provider


export function UseSetsContext(){
    return useContext(setsContext)
} 