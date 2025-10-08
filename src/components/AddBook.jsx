import React from "react";

function AddBook() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add a new book</h1>
      <form>
        <div className="mb-4">
          {/* title */}
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border rounded-md w-full p-2"
          />
        </div>
        {/* author */}
        <input type="text" />
        {/* category */}
        <input type="text" />
        {/* description */}
        <input type="text" />
        {/* rating */}
        <input type="text" />
        {/* Submit button */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
