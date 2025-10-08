import React, { useState } from "react";
import { BOOKS_DATA } from "../data/bookData";
import BookCard from "./BookCard";

// this will be available at /browser path

function BrowseBooks() {
  const [searchText, setSearchText] = useState("");

  // search logic
  // this will work even outside any function,
  // as when state change, component re-render
  const filteredBooks = BOOKS_DATA.filter((item) => {
    if (
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.author.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return item;
    }
  });


  return (
    <div>
      <h1>Browser All Books </h1>
      <div>
        {/* Search input field */}
        <input
          type="text"
          value={searchText}
        //   Make the input controlled
          onChange={(event)=>setSearchText(event.target.value)}
          placeholder="Enter book title or author name..."
          className="border"
        />
      </div>
      <div>
        {filteredBooks.map((item) => (
          <BookCard key={item.id} bookData={item} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
