import { createSlice } from '@reduxjs/toolkit'

const initialState: any = [];



const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      userAdded: {
         reducer(state, action: any) {
            state.push(action.payload)
         },
         prepare(step1, step2, step3) {
            return {
               payload: {
                  data: {
                     step1: step1.data,
                     step2: step2.data,
                     step3: step3.data,

                  }
               },
            }
         },
      },

   },
})

export const { userAdded } = userSlice.actions



export default userSlice.reducer


