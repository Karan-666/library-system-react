// this is responsible for setting up the main Redux store
import {configureStore} from "@reduxjs/toolkit"
import bookReducer from "./bookSlice"; // importing reducer function as name bookReducer

// This creates the central Redux store
const appStore = configureStore({
    reducer:{
        //We are giving our slice a name 'books' and connecting its reducer
        books: bookReducer,
    }
});

export default appStore;