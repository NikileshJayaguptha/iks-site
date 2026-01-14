import React from 'react'
import Speakercard from '../speakercard/speakercard'
import "./speakers.css"
import speaker1 from "../../assets/speaker1.png"
import speaker2 from "../../assets/speaker2.png"
import speaker3 from "../../assets/speaker3.png"
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
        path={speaker2}  
        name="ANANTHALAKSHI ADINARAYANAN"  
        desc="Co-Founder, Anaadi Foundation & Dharma Gurukulam , IKS Expert" 
        topic="xxx"
        direct="left"
      />
      <Speakercard 
        path={speaker3}  
        name="SHIVADEEPAN"  
        desc="" 
        topic="சைவ சித்தாந்தத்தில் உறக்கமும் உயிரும்"
        direct="right"
      />
    </div>
  )
}
