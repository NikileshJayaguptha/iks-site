import './App.css'
import Navbar from './Components/navbar'
import Home from "./Components/Home/home.jsx"
import Speakers from './Components/Speakers/speakers.jsx'
import About from './Components/About/about.jsx'
import Committee from './Components/Committee/committee.jsx'
import Program from './Components/Programs/program.jsx'
import Paperpresentation from './Components/Paperpresentation/Paperpresentation.jsx'
import Quizpage from "./Components/Quiz/quizpage.jsx"
import Schedule from './Components/Schedule/schedule.jsx'
import Venue from './Components/Venue/venue.jsx'
import Rangoli from './Components/Rangoli/rangoli.jsx'
import { HashRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path='/about' element={<About />}  />
        <Route path='/venue' element={<Venue />}  />
        <Route path='/commitee' element={<Committee />}  />
        <Route path='/programs' element={<Program />}  />
        <Route path='/paperpresentation' element={<Paperpresentation />}  />
        <Route path='/quiz' element={<Quizpage />}  />
        <Route path='/schedule' element={<Schedule />}  />
        <Route path='/rangoli' element={<Rangoli />}  />


      </Routes>
    </HashRouter>
  )
}

export default App
