import React, { useState } from "react";

function AddBook() {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  function handleChange(event){

    // destructure target to get current id and value
    const {id , value} = event.target;

    //since its async, we get previous data
    setFormData(prevFormData=> ({...prevFormData, [id]:value}));
    // above code is like setFormData({ ...formData, title: event.target.value });
    // so instead of making handchange function for each form element, we did it one go.
  }

  function handleSubmit(event){
    // when we clicks the "Add Book" button, 
    // the form will try to submit and reload the page. 
    // below code will prevent this defualt behavior
    event.preventDefault();

    console.log("form data submitted:",formData);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a new book</h1>
      {/* Handing on click of submit button action on form tak by handleSubmit */}
      {/* <Form> is designed to handle submission */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {/* title */}
          {/* Label to show what the input field is for */}
          {/* htmlFor is a special attribute that connects a label to an input field. 
          htmlFor value must match the id of the <input> tag. */}
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title} 
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        {/* author */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-medium mb-1"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            value={formData.author} 
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        {/* category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-medium mb-1"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            value={formData.category} 
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        {/* description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            value={formData.description} 
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        {/* rating */}
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-1"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            // rating validation
            min="1" max="5" step="0.1"
            value={formData.rating} 
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
          Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
