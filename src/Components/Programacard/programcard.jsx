import React from 'react'
import "./programcard.css"
export default function Programcard(props) {
  return (
    <div><button className='progbutton'>{props.name}</button></div>
  )
}
