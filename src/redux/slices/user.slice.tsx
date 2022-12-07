import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/loginThunk";
import { registerThunk } from "../services/registerThunk";

interface iInitialState{
  registerOrLogging: boolean
}

const initialState = {
  registerOrLogging: false
} as iInitialState

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {

  },
  extraReducers: {
    [registerThunk.pending.toString()]: (state) => {
      state.registerOrLogging = true
    }, 
    [registerThunk.fulfilled.toString()]: (state, {payload}) => {
      state.registerOrLogging = false
    }, 
    [registerThunk.rejected.toString()]: (state, {payload}) => {
      state.registerOrLogging = false
    }, 

    [loginThunk.pending.toString()]: (state) => {
      state.registerOrLogging = true
    }, 
    [loginThunk.fulfilled.toString()]: (state, {payload}) => {
      state.registerOrLogging = false
    }, 
    [loginThunk.rejected.toString()]: (state, {payload}) => {
      state.registerOrLogging = false
    }, 
  }
})

export default userSlice.reducer