import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/app/redux/store";
import { AuthResponse } from '../types/types';


const initialState: AuthResponse = {
  token: "",
  expired: false,
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoginUpdate:(state,action)=>{
      state.expired = action.payload
    }
  },  
  
});

export const { userLoginUpdate } = authSlice.actions;


export default authSlice.reducer;