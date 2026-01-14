import './Navbar.css'
import ssnLogo from '../assets/ssn.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="site-title">
          <img className="logoimg" src={ssnLogo} alt="SSN Logo" />
        </Link>
      </div>

      <ul className="itemlist">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/speakers">Speakers</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/venue">Venue</Link></li>
        <li><Link to="/committee">Committee</Link></li>
        <li><Link to="/registration">Registration</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
