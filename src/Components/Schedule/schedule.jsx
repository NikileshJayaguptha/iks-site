import React from 'react'
import "./schedule.css"
export default function Schedule() {
  return (
    <div className='schedulewrapper'>
     
     <iframe
      src="/schedule.pdf"
      title="PDF Viewer"
      width="100%"
      height="700vh"
      style={{ border: "none" }}
    />

    </div>
  )
}
