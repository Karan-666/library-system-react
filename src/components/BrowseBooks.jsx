import React, { useState } from "react";
// import { BOOKS_DATA } from "../data/bookData";
import BookCard from "./BookCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// this will be available at /browser path

function BrowseBooks() {
  const [searchText, setSearchText] = useState("");

  // getting category name from dynamic routing
  const { category } = useParams();
  //  console.log(category, "current category");

  // getting data from redux store
  // store -> We get store from wrapping <provider> in main app
  // books -> as we see in bookSlice.js -> name of slice
  // booksList -> as we see in bookSlice.js -> initial state of books state
  // that makes store.books.booksList
  const allBooks = useSelector((store) => store.books.booksList);

  // search and category filter logic
  // this will work even outside any function,
  // as when state change, component re-render
  const filteredBooks = allBooks.filter((item) => {
    //filter expects the cb function to return true or false
    return (
      // search filter logic
      (item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.author.toLowerCase().includes(searchText.toLowerCase())) &&
      // category filter logic
      (category === undefined ||
        item.category.toLowerCase() === category.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-6">
      {/* Showing heading based on weather we came from browse books or came from a category */}

      {/* ////////Search input fields/////////// */}
      <div className="max-w-xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {category ? `Browse Books in ${category}` : "Browse All Books"}
          {/* Accent underline */}
        <div className="w-24 h-1 bg-[#4EDCD8] mx-auto mb-5 mt-2"></div>
        </h1>
        
        <input
          type="text"
          // Making input controlled
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search by title or author..."
          className="bg-zinc-800 text-white border border-slate-700 rounded-md p-3 w-full"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredBooks.map((item) => (
          <BookCard key={item.id} bookData={item} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
