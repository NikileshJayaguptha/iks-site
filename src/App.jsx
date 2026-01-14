import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar'
import Home from "./Components/Home/home.jsx"
import Speakers from './Components/Speakers/speakers.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Home /> },
    {path:"/speakers",element:<Speakers /> }
  ])

  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />
    </>
  )
}

export default App
