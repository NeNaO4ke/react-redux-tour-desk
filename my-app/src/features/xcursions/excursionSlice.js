import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "./client";

const initialState = {
    excursions: [],
    maxCost: 0,
    status: 'idle',
    statusOne: 'idle',
    error: null,

}
export const fetchExcursions = createAsyncThunk('excursion/fetchExcursions', async () => {
    const response = await client.get('http://localhost:8080/excursions')
    const data = await response.data.content
    console.log(data)
    return data
})

export const fetchOneExcursion = createAsyncThunk('excursion/fetchOneExcursion', async (id) => {
    const response = await client.get(`http://localhost:8080/excursions/${id}`)
    const data = await response.data
    console.log(data)
    return data
})

export const fetchMaxCost = createAsyncThunk('excursion/maxCost', async (id) => {
    const response = await client.get(`http://localhost:8080/excursions/maximumCost`)
    const data = await response.data
    console.log(data)
    return data
})
export const fetchQuery = createAsyncThunk('excursion/query', async ([lower,upper, order]) => {
    const response = await client.get(`http://localhost:8080/excursions/query?lower=${lower}&upper=${upper}&order=${order}`)
    const data = await response.data.content
    console.log(data)
    return data
})

export const excursionSlice = createSlice({
    name: 'excursions',
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
        },
        oneExcursionReceived(state) {
            if (state.statusOne === 'succeeded') {
                state.statusOne = 'idle'
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
                state.excursions = action.payload
                state.statusOne = 'succeeded'
            })
            .addCase(fetchExcursions.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchQuery.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchQuery.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.excursions = action.payload
                state.statusOne = 'succeeded'
            })
            .addCase(fetchQuery.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchOneExcursion.pending, (state, action) => {
                state.statusOne = 'loading'
            })
            .addCase(fetchOneExcursion.fulfilled, (state, action) => {
                state.statusOne = 'succeeded'
                // Add any fetched posts to the array
                const excursion = action.payload
          //      state.excursions = state.excursions.concat(excursion)
                const index = state.excursions.findIndex(object => object.id === excursion.id);

                if (index === -1) {
                    state.excursions = state.excursions.concat(excursion);
                }
            })
            .addCase(fetchOneExcursion.rejected, (state, action) => {
                state.statusOne = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchMaxCost.fulfilled, (state, action) => {
                state.maxCost = parseFloat(action.payload)
            })
    }
})

export const {excursionsLoading, excursionsReceived, oneExcursionReceived} = excursionSlice.actions
export default excursionSlice.reducer
export const selectExcursions = (state) => state.excursions.excursions;
export const selectExcursionById = (state, excursionId) => (state.excursions.excursions.find((excursion) => excursion.id === excursionId));
export const selectMaxCost = (state) => state.excursions.maxCost;



