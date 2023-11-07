import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BookService from "@/package/services/book/BookService";
import { fetchAllBooks} from "@/package/services/book/index"
import { GetAllBook } from "../types";
import axios from "axios";

const initialState: GetAllBook = {
    data: [],
    loading: '',
    success: false,
    error: ""
};


export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBooks.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchAllBooks.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(fetchAllBooks.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.error.message;
            });

    },
})

export default bookSlice.reducer;