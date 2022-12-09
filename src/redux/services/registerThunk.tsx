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
      // console.log('data from register :', data);

      const result = await axios.post(REGISTER_PATH, data)
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error)
    }
  })