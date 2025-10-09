import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

function Homepage() {
  // categories of books we have
  // added dummy categories
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
    "Self-Help",
  ];

  // adding some dummy books
  const popularBooks = [
    { id: 1, title: "The Martian", author: "Andy Weir" },
    { id: 2, title: "Dune", author: "Frank Herbert" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir" },
  ];

  // returning jsx to display
  return (
    // main container
    // container: sets a fixed width of content which chang based on screen size
    // mx-auto: centers container horizontally
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to online library</h1>
      <h2 className="text-xl font-semibold mb-2">Book Categories</h2>
      {/* Displaying all the categories */}
      {/* Used flex wrap in case categories goes to next line */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((item, index) => (
          // Key attribute Helps React Track Items
          <Link key={index} to={`/browse/${item}`}>
            <div
              className="bg-zinc-800 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-zinc-700"
              key={index}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Popular Books</h2>
      <div className="flex flex-wrap gap-4">
        {popularBooks.map((item) => (
          // passing whole book object is bookcard component and passing key for react
          <BookCard key={item.id} bookData={item} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
