import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    currentDiplome: object
}

const initialState = {
    currentDiplome: null
} as IinitialState


const diplomeSlice = createSlice({
    name: 'diplomes',
    initialState: initialState,
    reducers: {
        setCurrentDiplome: (state, { payload }) => {
            state.currentDiplome = payload
        },
        initializeCurrentDiplome: (state) => {
            state.currentDiplome = null
        }

    }
})

export const { setCurrentDiplome } = diplomeSlice.actions
export default diplomeSlice.reducer