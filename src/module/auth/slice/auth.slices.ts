import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/app/redux/store";
import { AuthResponse } from '../types/types';
import { $auth, $cookie } from '@/package/utils';


const initialState: AuthResponse = {
  token: "",
  expired: false,
  loginSuccess: false,
  message:""
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    userLoginUpdate: (state, action) => {
      state.expired = action.payload
      
    },

    messageControl:(state, action)=>{
      state.message = action.payload
    },

    alertControl:(state, action) => {
      state.loginSuccess = action.payload
    },

  },

});

export const { userLoginUpdate, alertControl,messageControl } = authSlice.actions;


export default authSlice.reducer;