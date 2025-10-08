import React from "react";
import { useParams } from "react-router-dom";
import { BOOKS_DATA as data } from "../data/bookData";
import {Link} from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  console.log("Book ID from URL:", id);

  const bookObj = data.find((item) => {
    // we are not using strict operator as id that comes from useParams() is always a string
    // id in our data is an integer
    // we can also type cast id to integer using parseInt
    return item.id == id;
  });

  console.log(bookObj, "book object fetched from id");

  if (!bookObj) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="container mx-auto p-6">
    <Link className="text-blue-500 hover:underline mb-4 inline-block" to="/browse">Back to Browse</Link>
      <h1 className="text-4xl font-bold mb-4"> {bookObj.title} </h1>
      <h2 className="text-xl font-semibold text-gray-600 mb-2">
        by {bookObj.author}
      </h2>
      <p className="text-sm font-medium text-gray-500 mb-4">
        Rating: {bookObj.rating} / 5
      </p>
      <p className="text-lg text-gray-700">{bookObj.description}</p>
    </div>
  );
}

export default BookDetails;
