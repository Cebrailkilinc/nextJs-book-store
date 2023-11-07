import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from "@/module/auth/slice/auth.slices";
import booksReducer from '@/module/admin/slice/books.slice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    books:booksReducer,
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