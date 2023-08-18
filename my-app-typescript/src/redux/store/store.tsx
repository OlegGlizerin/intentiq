import { configureStore } from '@reduxjs/toolkit'

import tableReducer from '../tableSlice';
import stepsReducer from '../stepsSlice';
import userReducer from '../userSlice';

export default configureStore({
  reducer: {
    table: tableReducer,
    steps: stepsReducer,
    user: userReducer
  }
})