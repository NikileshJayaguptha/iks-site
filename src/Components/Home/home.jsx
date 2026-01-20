import React from 'react'
import "./home.css"
import ssnlogo from "../../assets/ssn.png"
import campusimage from "../../assets/ssncampus.png"
import ikslogo from "../../assets/ikslogo.png"
export default function home() {
  return (
    <div className='homecontainer'>
      <div className="texttitle">
        <div className='title'>Two day National Conference on <br /> Indian Knowledge Systems: Tradition, Worship, Technology <br/> Integrating indian knowledge system for engineers </div>
        <div className="datedesc">13-14 February 2026</div>
        <div className="collegename">SSN College of Engineering</div>
        
      </div>
      <div className="imagewrapper">
        <div className="campusimgwrapper">
          <img className="campusimg" src={campusimage} alt="" />
        </div>
        <img src={ikslogo} alt="" className="ikslogo" />
        <img src={ssnlogo} alt="" className="ssnlog" />
      </div>
      
    </div>
  )
}
