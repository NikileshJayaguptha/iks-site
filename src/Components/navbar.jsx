import { useState } from 'react'
import './navbar.css'
import ssnLogo from '../assets/ssn.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="site-title">
          <img className="logoimg" src={ssnLogo} alt="SSN Logo" />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`itemlist ${open ? 'open' : ''}`}>
        <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/speakers">Speakers</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/schedule">Schedule</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/programs">Programs</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/commitee">Committee</Link></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfcuNDjHwn4SHuMOq5bJTNRc3P3fBTNb7H32dttJjs49qaanw/viewform?usp=publish-editor">Registration</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
