//This file will contain the initial state of books 
// and the logic to add new books to the list

import { createSlice } from "@reduxjs/toolkit";
import {BOOKS_DATA as data} from "../data/bookData.js"

const bookSlice = createSlice({
    name: 'books', // name of slice
    initialState:{
        // initial state of books state
        // this is like a
        booksList: data,
    },
    reducers:{
    // functions to change the state
    // state -> current initial state of slice
    // action -> object that carries the data
    addBook : (state , action) =>{
        state.booksList.push(action.payload);
        // The state variable is a special object that lets you perform "mutations" safely
    }     
    }
});

// default export is reducer property of whole bookSlice object
// reducers makes the changes to state
export default bookSlice.reducer;

// named export for actions for dispatching
// component ask for a change by dispatching an action
export const {addBook} = bookSlice.actions;