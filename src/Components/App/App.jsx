/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home'
import Main from '../Main/Main'
import Notfound from '../Notfound/Notfound'
export default function App() {

  const router = createBrowserRouter([
    {
      path: '', element: <Main />, children: [
        { index: true, element:<Home />},
        { path: '*', element:<Notfound />}
      ]
    }
  ])

  return <>
      <RouterProvider router={router} />
  </>
}