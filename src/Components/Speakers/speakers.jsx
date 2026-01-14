import React from 'react'
import Speakercard from '../speakercard/speakercard'
import "./speakers.css"
export default function speakers() {
  return (
    <div className='speakers'>
      <Speakercard 
        path="../Images/speaker1.png" 
        name="SOMA VEERAPPAN"  
        desc="Writer & Former General Manager, Punjab National Bank" 
        topic="Thirukkural - An ancient Treatise on Management"
        direct="right"
      />
      <Speakercard 
        path="../Images/speaker1.png" 
        name="SOMA VEERAPPAN"  
        desc="Writer & Former General Manager, Punjab National Bank" 
        topic="Thirukkural - An ancient Treatise on Management"
        direct="left"
      />
      <Speakercard 
        path="../Images/speaker1.png" 
        name="SOMA VEERAPPAN"  
        desc="Writer & Former General Manager, Punjab National Bank" 
        topic="Thirukkural - An ancient Treatise on Management"
        direct="right"
      />
    </div>
  )
}
