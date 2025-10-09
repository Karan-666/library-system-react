import React, { useState } from "react";
import { useDispatch } from "react-redux";

// we exported action as named export, using it here
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  //Use State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  // Redux hook
  // dispatch function
  const dispatch = useDispatch();

  // getting the navigate function
  const navigate = useNavigate();

  //A single handler function for all form inputs
  // This is a controlled component, so the input value is always in sync with state
  // it is a handling all input using placeholder for key value
  function handleChange(event) {
    // destructure target to get current id and value
    const { id, value } = event.target;

    //since its async, we get previous data
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    // above code is like setFormData({ ...formData, title: event.target.value });
    // so instead of making handchange function for each form element, we did it one go.
  }

  // Handle form submission
  function handleSubmit(event) {
    // when we clicks the "Add Book" button,
    // the form will try to submit and reload the page.
    // below code will prevent this defualt behavior
    event.preventDefault();

    // Check if any field is empty
    if (
      formData.title.trim() === "" ||
      formData.author.trim() === "" ||
      formData.category.trim() === "" ||
      formData.description.trim() === "" ||
      formData.rating === "" // .trim() is not needed for number input
    ) {
      alert("Please fill out all fields.");
      return;
    }

    // create a new book object (as we need to add id)
    const newBook = {
      id: Date.now(), // Use a unique timestamp as the ID
      title: formData.title,
      author: formData.author,
      category: formData.category,
      description: formData.description,
      rating: formData.rating,
    };

    dispatch(addBook(newBook));
    // dispatch acts like an indirect setter function,
    // It sends a message to the reducer to trigger a state change

    // Reset the form fields to be empty
    setFormData({
      title: "",
      author: "",
      category: "",
      description: "",
      rating: "",
    });

    // Redirect the user to the Browse Books page
    navigate("/browse");

    console.log("form data submitted:", formData);
  }

  return (
    // Outer container to center the content
    <div className="min-h-screen flex items-start justify-center py-10 px-4">
      {/* Inner container to limit form width */}
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Add a New Book
          </h1>
          {/* Accent underline */}
          <div className="w-24 h-1 bg-[#4EDCD8] mt-2 mx-auto"></div>
        </div>

        {/* Form card container */}
        <div className="bg-[#111112] p-6 md:p-8 rounded-lg shadow-lg border border-slate-700">
          {/* Handing on-click of submit button action on form tak by handleSubmit */}
          {/* <Form> is designed to handle submission */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {/* ////////title //////////////////*/}
              {/* Label to show what the input field is for */}
              {/* htmlFor is a special attribute that connects a label to an input field. 
          htmlFor value must match the id of the <input> tag. */}
              <label
                htmlFor="title"
                className="block text-white font-medium mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 md:p-3 rounded-lg bg-[#1E1E20] text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
              />
            </div>
            {/* /////////////////author/////////////////// */}
            <div className="mb-4">
              <label
                htmlFor="author"
                className="block text-white font-medium mb-1"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 md:p-3 rounded-lg bg-[#1E1E20] text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
              />
            </div>
            {/* /////////////////////category/////////////// */}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-white font-medium mb-1"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 md:p-3 rounded-lg bg-[#1E1E20] text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
              />
            </div>
            {/* ////////////////////description////////////////// */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-white font-medium mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 md:p-3 rounded-lg bg-[#1E1E20] text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
              />
            </div>
            {/* ////////////////////rating//////////////////// */}
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-white font-medium mb-1"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                // rating validation
                min="1"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-2 md:p-3 rounded-lg bg-[#1E1E20] text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
              />
            </div>
            {/* /////////////////Submit button////////////////////// */}
            <div className="text-center">
            <button
              type="submit"
              className="bg-[#4EDCD8] text-black font-bold py-2 px-4 rounded-md hover:bg-teal-700 cursor-pointer "
            >
              Add Book
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
