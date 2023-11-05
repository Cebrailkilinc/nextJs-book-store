import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/app/redux/store";
import { AuthResponse } from '../types/types';
import { $auth, $cookie } from '@/package/utils';


const initialState: AuthResponse = {
  token: "",
  expired: false,
  loginSuccess: true
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    userLoginUpdate: (state, action) => {
      state.expired = action.payload
      
    },

    closeAlert:(state, action) => {
      state.loginSuccess = action.payload
    },

  },

});

export const { userLoginUpdate, closeAlert } = authSlice.actions;


export default authSlice.reducer;