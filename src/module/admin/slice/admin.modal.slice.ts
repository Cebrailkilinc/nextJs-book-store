import { createSlice } from "@reduxjs/toolkit"

type IModalContent = {
    modalContent: string
}
const initialState: IModalContent = {
    modalContent: ""
}

export const adminModalSlice = createSlice({
    name: "adminModal",
    initialState,
    reducers: {
        modalContentControl: (state, action) => {
            state.modalContent = action.payload
        }
    },
})
export const { modalContentControl } = adminModalSlice.actions;
export default adminModalSlice.reducer;