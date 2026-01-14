import './App.css'
import Navbar from './Components/navbar'
import Home from "./Components/Home/home.jsx"
import Speakers from './Components/Speakers/speakers.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      { path: "/speakers", element: <Speakers /> }
    ],
    {
      basename: "/iks-site",
    }
  )

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
