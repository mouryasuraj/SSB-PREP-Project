
import { createSlice } from "@reduxjs/toolkit";
import { words } from "../../Data/Words";


export const showTestWords = createSlice({
    name:'word',
    initialState:words,
    reducers:{
        
    }
});

export const {} = showTestWords.actions

export default showTestWords.reducer
