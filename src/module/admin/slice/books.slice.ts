import { createSlice } from "@reduxjs/toolkit";
import { GetAllBook } from "../types";

const initialState: GetAllBook = {
    allBook: [],
    loading: '',
    success: false,
    error: ""
};


export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getAllBook:(state,action)=>{
            state.allBook = action.payload;
        }
    },
})
export const { getAllBook } = bookSlice.actions;
export default bookSlice.reducer;