import React from 'react'
import Speakercard from '../speakercard/speakercard'
import "./speakers.css"
import speaker1 from "../../assets/speaker1.png"
export default function speakers() {
  return (
    <div className='speakers'>
      <Speakercard 
        path={speaker1} 
        name="SOMA VEERAPPAN"  
        desc="Writer & Former General Manager, Punjab National Bank" 
        topic="Thirukkural - An ancient Treatise on Management"
        direct="right"
      />
      <Speakercard 
        path={speaker1}  
        name="SOMA VEERAPPAN"  
        desc="Writer & Former General Manager, Punjab National Bank" 
        topic="Thirukkural - An ancient Treatise on Management"
        direct="left"
      />
      <Speakercard 
        path={speaker1}  
        name="SOMA VEERAPPAN"  
        desc="Writer & Former General Manager, Punjab National Bank" 
        topic="Thirukkural - An ancient Treatise on Management"
        direct="right"
      />
    </div>
  )
}
