import './Navbar.css'
import ssnLogo from '../assets/ssn.png'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
        <a href='/' className='site-title'><img className="logoimg" src={ssnLogo} alt="" /></a>
        </div>
        <ul className='itemlist'>
            <li >   <a href="/iks-site/speakers">Speakers</a>            </li>
            <li >   <a href="/iks-site/about">Schedule</a>               </li>
            <li>    <a href="/iks-site/programs">Programs</a>            </li> 
            <li>    <a href="/iks-site/venue">Venue</a>                   </li> 
            <li>    <a href="/iks-site/committee">Committee</a>           </li> 
            <li>    <a href="/iks-site/registration">Registration</a>     </li> 
           
        </ul>
    </nav>
  )
}

export default Navbar
