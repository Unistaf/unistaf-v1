import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_SCHOOLS_API_PATH } from "src/routes/app_paths";
import { setListSchools } from "../slices/schools.slice";

export const getSchoolsThunk = createAsyncThunk(
  'schools/get',
  async (token:string, {dispatch, rejectWithValue}) => {
    try {
      const {data} = await axios.get(GET_SCHOOLS_API_PATH, {
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })
      dispatch(setListSchools(data.data))
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)