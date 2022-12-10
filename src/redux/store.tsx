import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    user: userSlice
  }
})

export interface iStore {
  user: object,
}

export type AppDispatch = typeof store.dispatch;