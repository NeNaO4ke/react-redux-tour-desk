import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "./client";

const initialState = {
    status: 'idle',
    error: null,
    excursions: []
}
export const fetchExcursions = createAsyncThunk('excursion/fetchExcursions', async () => {
    const response = await client.get('http://localhost:8080/excursions')
    const data = await response.data.content
    console.log(data)
    return data
})

export const fetchOneExcursion = createAsyncThunk('excursion/fetchExcursions', async (id) => {
    const response = await client.get(`http://localhost:8080/excursions/${id}`)
    const data = await response.data.content
    console.log(data)
    return data
})

export const excursionSlice = createSlice({
    name: 'excursion',
    initialState,
    reducers: {
        excursionsLoading(state, action) {
            if (state.status === 'idle') {
                state.status = 'loading'
            }
        },
        excursionsReceived(state, action) {
            if (state.status === 'succeeded') {
                state.status = 'idle'
                state.excursions = action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExcursions.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchExcursions.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.excursions = state.excursions.concat(action.payload)
            })
            .addCase(fetchExcursions.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchOneExcursion.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchOneExcursion.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.excursions = state.excursions.concat(action.payload)
            })
            .addCase(fetchOneExcursion.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const {excursionsLoading, excursionsReceived} = excursionSlice.actions

export const selectExcursions = (state) => state.excursion.excursions;
export const selectExcursionById = (state, id) => state.excursion.excursions.find(ex => ex.id === id);

export default excursionSlice.reducer
