import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
        <a href='/' className='site-title'><img className="logoimg" src="../Images/ssn.png" alt="" /></a>
        </div>
        <ul className='itemlist'>
            <li >   <a href="/speakers">Speakers</a>            </li>
            <li >   <a href="/about">Schedule</a>               </li>
            <li>    <a href="/programs">Programs</a>            </li> 
            <li>    <a href="venue">Venue</a>                   </li> 
            <li>    <a href="committee">Committee</a>           </li> 
            <li>    <a href="registration">Registration</a>     </li> 
           
        </ul>
    </nav>
  )
}

export default Navbar
