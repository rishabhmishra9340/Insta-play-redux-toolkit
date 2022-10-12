import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../Slice/Main";
import MovieSlice from "../Slice/MovieDetail";
import SignInSlice from "../Slice/Login";


 const Store = configureStore({
    reducer: {
        Login: SignInSlice,
        Home: HomeSlice,
        movie:MovieSlice
    }
})

export default Store;