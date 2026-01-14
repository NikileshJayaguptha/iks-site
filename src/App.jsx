import './App.css'
import Navbar from './Components/navbar'
import Home from "./Components/Home/home.jsx"
import Speakers from './Components/Speakers/speakers.jsx'
import About from './Components/About/about.jsx'
import Committee from './Components/Committee/committee.jsx'
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path='/about' element={<About />}  />
        <Route path='/commitee' element={<Committee />}  />

      </Routes>
    </HashRouter>
  )
}

export default App
