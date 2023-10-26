import { configureStore } from "@reduxjs/toolkit";
import showWords from "../Feature/SSB/showWords";

export const store = configureStore({
    reducer : {
        word: showWords
    }
})