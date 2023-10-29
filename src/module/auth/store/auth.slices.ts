import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/app/redux/store";


interface CounterState {
  token: string;
  expired: boolean
}

const initialState: CounterState = {
  token: "",
  expired: false,
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userLoginUpdate:(state,action)=>{
      state.expired = action.payload
    }
  },  
  
});

export const { userLoginUpdate } = counterSlice.actions;


export default counterSlice.reducer;