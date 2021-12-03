import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth';
import excursionReducer from '../features/xcursions/excursionSlice';
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    counter: counterReducer,
    auth: authReducer,
    excursion: excursionReducer
  }
})

