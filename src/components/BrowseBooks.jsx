import React, { useState } from "react";
import { BOOKS_DATA } from "../data/bookData";
import BookCard from "./BookCard";
import { useParams } from "react-router-dom";

// this will be available at /browser path

function BrowseBooks() {
  const [searchText, setSearchText] = useState("");

// getting category name from dynamic routing 
 const {category} = useParams();
//  console.log(category, "current category");

  // search and category filter logic
  // this will work even outside any function,
  // as when state change, component re-render
  const filteredBooks = BOOKS_DATA.filter((item) => {
    //filter expects the cb function to return true or false
      return(
      // search filter logic
      (item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.author.toLowerCase().includes(searchText.toLowerCase()))
      &&(
      // category filter logic  
        (category === undefined || item.category.toLowerCase() === category.toLowerCase() )
      )
    )
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
