import React from 'react'
import {Link} from "react-router-dom"

function BookCard({bookData}) {
  // made cards which we will loop through
  // use animation on hover
  // the book object which is passed as props will show all the relevant info
  return (
    <div className=" rounded-lg p-6 shadow-lg w-64 transform hover:scale-105 transition duration-300 hover:z-10  bg-gradient-to-br from-slate-900 to-slate-850 border border-slate-700
                hover:from-teal-950 hover:to-sky-950">
      <h3 className="text-white text-xl font-bold mb-2 truncate">{bookData.title}</h3>
      <p className="text-slate-400">by {bookData.author}</p>
      <div className="mt-4">
      <Link to={`/book/${bookData.id}`} className="text-[#4EDCD8] hover:underline">View Details</Link>
    </div>
    </div>
  )
}

export default BookCard
