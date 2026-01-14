import React from 'react'
import "./committeecard.css"

export default function Committeecard({ image, name, title }) {
  return (
    <div className="committee-card">
      <img src={image} alt={name} className="committee-img" />

      <div className="committee-text">
        <div className="committee-name">{name}</div>
        <div className="committee-title">{title}</div>
      </div>
    </div>
  )
}
