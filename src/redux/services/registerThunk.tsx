import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { REGISTER_PATH } from "src/routes/app_paths";

interface iData {
  data: {
    firstname: string,
    lastname: string,
    email: string,
    password: string
  }
}

export const registerThunk = createAsyncThunk(
  'user/register',
  async ({ data }:iData, { rejectWithValue }) => {
    try {
      await axios.post(REGISTER_PATH, data)
      
    } catch (error) {      
      return rejectWithValue(error)
    }
  })