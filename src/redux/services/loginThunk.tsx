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
      console.log('data from login :', data);
      
      const result = await axios.post(LOGIN_PATH, data)
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error)
    }
  })