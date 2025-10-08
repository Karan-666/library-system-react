import React from "react";
import BookCard from "./BookCard";

function Homepage() {
  // categories of books we have
  // added dummy categories
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];

  // adding some dummy books
  const popularBooks = [
    { id: 1, title: "The Martian", author: "Andy Weir" },
    { id: 2, title: "Dune", author: "Frank Herbert" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir" },
  ];


  // returning jsx to display
  return (
    // main container
    <div>
      <h1>Welcome to online library</h1>
      <h2>Book Categories</h2>
      {/* Displaying all the categories */}
      <div>
        {categories.map((item, index) => (
          // Key attribute Helps React Track Items
          <div key={index}>{item}</div>
        ))}
      </div>

       <h2>Popular Books</h2> 
       <div>
        {
          popularBooks.map((item) => (
            // passing whole book object is bookcard component and passing key for react
            <BookCard key={item.id} bookData={item} />
          ))
        }
       </div>

    </div>
  );
}

export default Homepage;
