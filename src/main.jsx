import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    children : [
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
