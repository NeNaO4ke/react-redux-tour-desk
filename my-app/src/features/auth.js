import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogged = true
        },
        logout: state => {
            state.isLogged = false
        }
    }
    }
)
export const { login, logout } = authSlice.actions;
export const selectLoginStatus = (state) => state.auth.isLogged;

export default authSlice.reducer