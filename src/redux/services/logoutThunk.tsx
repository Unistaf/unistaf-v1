import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN_PATH, LOGOUT_PATH } from "src/routes/app_paths";

interface iData {
  logout: string
}

export const logoutThunk = createAsyncThunk(
  'user/logout',
  async (arg:{token: string}, { rejectWithValue }) => {
    try {
      await axios.get(LOGOUT_PATH, {
        headers: {
          'Authorization': `bearer ${arg.token}`
        }
      })
      sessionStorage.clear()
      localStorage.clear();
    } catch (error) {
      console.log(error);   
      return rejectWithValue(error)   
    }
  })