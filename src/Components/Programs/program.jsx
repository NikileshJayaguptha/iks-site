import React from 'react'
import "./program.css"
import Programcard from '../Programacard/programcard'
import { Link } from 'react-router-dom'
export default function Program() {
  return (
    <div className="program-page">
      <div className="programcard">
        <Link to="/paperpresentation">
          <Programcard name="Paper Presentation"/>
        </Link>
        <Link to="/quiz">
          <Programcard name="IKS Quiz"/>
        </Link>      
      </div>
    </div>
  )
}
