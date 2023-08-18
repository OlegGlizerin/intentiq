import { createSlice } from '@reduxjs/toolkit'

const initialState = [
   {
      id: 1,
      data: '',
   },
   {
      id: 2,
      data: '',
   },
   {
      id: 3,
      data: '',
   },
];



const stepsSlice = createSlice({
   name: 'steps',
   initialState,
   reducers: {
      stepUpdated(state, action) {
         const { id, data } = action.payload
         const existingStep = state.find((currentStep) => currentStep.id === id)
         if (existingStep) {
            existingStep.data = data;
          }
      },
   },
})

export const { stepUpdated } = stepsSlice.actions



export default stepsSlice.reducer


