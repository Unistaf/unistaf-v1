import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_PATH, LOGOUT_PATH } from "src/routes/app_paths";

interface iData {
  logout: string
}

export const logoutThunk = createAsyncThunk(
  'user/login',
  async (arg:string, { rejectWithValue }) => {
    try {
      const {data} = await axios.post(LOGOUT_PATH)
      return data      
    } catch (error) {
      return rejectWithValue(error)
    }
  })