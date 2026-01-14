import React from 'react'
import "./home.css"
export default function home() {
  return (
    <div className='homecontainer'>
      <div className="texttitle">
        <div className='title'>Two day National Conference on <br /> Indian Knowledge Systems: Tradition, Worship, Technology <br/> Integrating indian knowledge system for engineers </div>
        <div className="datedesc">12-13 February 2026</div>
        <div className="collegename">SSN College of Engineering</div>
        
      </div>
      <div className="imagewrapper">
        <div className="campusimgwrapper">
          <img className="campusimg" src="../Images/ssncampus.jpg" alt="" />
        </div>
        <img src="../Images/ikslogo.png" alt="" className="ikslogo" />
        <img src="../Images/ssn.png" alt="" className="ssnlog" />
      </div>
    </div>
  )
}
