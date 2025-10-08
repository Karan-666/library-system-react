import React from 'react'
import {Link} from "react-router-dom"

function BookCard({bookData}) {
  return (
    <div className='flex gap-1 mx-auto'>
      <h3>{bookData.title}</h3>
      <p>by {bookData.author}</p>
    </div>
  )
}

export default BookCard
