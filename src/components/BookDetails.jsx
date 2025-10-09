import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { BOOKS_DATA as data } from "../data/bookData";
import { Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  // console.log("Book ID from URL:", id);

  // instead of dummy data, getting data from redux store now
  const data = useSelector(store => store.books.booksList);


  // this gets book object from id in the URL
  const bookObj = data.find((item) => {
    // we are not using strict operator as id that comes from useParams() is always a string
    // id in our data is an integer
    // we can also type cast id to integer using parseInt
    return item.id == id;
  });

  console.log(bookObj, "book object fetched from id");

  if (!bookObj) {
    // handing case of book not found
    return (
      <div className="container mx-auto p-6 text-white">
        <h1 className="text-3xl font-bold mb-4">Book not found!</h1>
        <Link to="/browse" className="text-blue-500 hover:underline">
          &larr; Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        className="text-sky-400 hover:underline mb-4 inline-block"
        to="/browse"
      >
        {" "}
        &larr; Back to Browse
      </Link>
      <h1 className="text-4xl font-bold mb-4"> {bookObj.title} </h1>
      <h2 className="text-xl font-semibold text-gray-400 mb-2">
        by {bookObj.author}
      </h2>
      <p className="text-sm font-medium text-gray-500 mb-4">
        Rating: {bookObj.rating} / 5
      </p>
      <p className="text-lg text-gray-400">{bookObj.description}</p>
    </div>
  );
}

export default BookDetails;
