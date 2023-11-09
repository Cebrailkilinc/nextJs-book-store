import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from "@/module/auth/slice/auth.slices";
import booksReducer from '@/module/admin/slice/books.slice';
import adminModalReducer from "@/module/admin/slice/admin.modal.slice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    books:booksReducer,
    adminModal:adminModalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;