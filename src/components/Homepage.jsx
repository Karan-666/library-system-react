import React from "react";

function Homepage() {
  // categories of books we have
  // added dummy categories
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];

  return (
    // main container
    <div>
      <h1>Welcome to online library</h1>
      <h2>Book Categories</h2>
      <div>
        {categories.map((item, index) => (
          // Key attribute Helps React Track Items
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
