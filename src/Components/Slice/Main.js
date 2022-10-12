import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    movieData:[],
    page:1,
    loading:false,
}


export const fetchMovies = createAsyncThunk('movie/getMovie', async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=461182fa2668493a72758c55a1789c35&page=${initialState.page}`)
    return response.data.results
})

export const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
        pageAction: (state, action) => {
            state.page = action.payload
        },
        pagePlus: (state) => {
            state.page += 1
        },
        pageMinus: (state) => {
            state.page -= 1
        },
        loadingAction: (state, action) => {
            state.loading = action.payload
        },
        movieDataAction: (state, action) => {
            state.movieData = action.payload
        }
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            console.log("pending")
            console.log(state.loading)
            state.loading = true
        },
        [fetchMovies.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log("fulfilled")
            return { ...state, movies: payload }
        },
        [fetchMovies.rejected]: (state) => {
            console.log('rejected')
            state.loading = false
        }
    }
})

export const { pageAction, loadingAction, movieDataAction, pagePlus, pageMinus } = HomeSlice.actions

export default HomeSlice.reducer