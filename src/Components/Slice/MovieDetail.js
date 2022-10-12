import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieData:[],
    play: false,
}

export const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        movieDataAction: (state, action) => {
            state.movieData = action.payload
        },
        playAction: (state, action) => {
            state.play = action.payload
        },
       

    }
})

export const { movieDataAction, playAction} = MovieSlice.actions

export default MovieSlice.reducer