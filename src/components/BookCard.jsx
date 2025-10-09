import React from 'react'
import {Link} from "react-router-dom"

function BookCard({bookData}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-md w-64">
      <h3 className="text-lg font-semibold truncate">{bookData.title}</h3>
      <p className="text-gray-600">by {bookData.author}</p>
      <div className="mt-4">
      <Link to={`/book/${bookData.id}`} className="text-blue-500 hover:underline">View Details</Link>
    </div>
    </div>
  )
}

export default BookCard
