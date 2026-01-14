import './App.css'
import Navbar from './Components/navbar'
import Home from "./Components/Home/home.jsx"
import Speakers from './Components/Speakers/speakers.jsx'
import About from './Components/About/about.jsx'
import Dates from './Components/dates/dates.jsx'
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path='/about' element={<About />}  />

      </Routes>
    </HashRouter>
  )
}

export default App
