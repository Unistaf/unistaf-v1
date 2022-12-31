import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_SCHOOLS_API_PATH } from "src/routes/app_paths";

export const getSchoolsThunk = createAsyncThunk(
  'schools/get',
  async (token: string, {dispatch, rejectWithValue}) => {
    try {
      const result = await axios.get(GET_SCHOOLS_API_PATH, {
        headers:{
          "Authorization": token
        }
      })

      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)