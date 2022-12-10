import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_PATH } from "src/routes/app_paths";

interface iData {
  data: {
    email: string,
    password: string
  }
}

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ data }:iData, { rejectWithValue }) => {
    try {
      const result = await axios.post(LOGIN_PATH, data)
      return result.data      
    } catch (error) {
      return rejectWithValue(error)
    }
  })