import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import HomePage from './components/Homepage';
import Header from './components/Header';
import BrowseBooks from './components/BrowseBooks'

// created router object that defines the path for the website
// it accepts an array of route objects
// each route object have path and element (rep - short)


// Approach 1: defining each layout

/* 
const appRouter = createBrowserRouter([
  {
    path: '/', // path for home page
    element: (
      <>
      <Header />
      <HomePage />
      </>
    )
  },
  {
    path: '/browse', // Path for browse books
    element: (
      <>
      <Header />
      <BrowseBooks />
      </>
    )
  }
]);

*/

// Approach 2: shared layout way

const appRouter = createBrowserRouter([
  {
    path: '/', // path for home page
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/browse',
        element: <BrowseBooks />
      },
    ]
  }
]);


//  I will replace <App /> with <RouterProvider> below and give it your router object.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
