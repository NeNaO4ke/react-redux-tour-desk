import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth';
import excursionReducer from '../features/xcursions/excursionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    excursions: excursionReducer
  }
})

