import { createSlice } from "@reduxjs/toolkit";

interface InitialState<T> {
  listSchools: Array<T>,
  allListSchools: Array<T>
}
const initialState = {
  listSchools: [],
  allListSchools: []
} as InitialState<object>

const schoolsSlice = createSlice({
  name: 'schools',
  initialState: initialState,
  reducers: {
    setListSchools:(state, {payload}) => {
      state.listSchools = payload
      state.allListSchools = payload
    },
    addNewSchool:(state, {payload}) => {

    }
  }
})

export const {setListSchools} = schoolsSlice.actions
export default schoolsSlice.reducer