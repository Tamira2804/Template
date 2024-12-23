import React from 'react'
import './CardWithHover.css'

const CardWithHover = ({ title, text, backgroundImage }) => {
  return (
    <div
      className='card'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p className='text'>{text}</p>
        <button className='btn'>View Trips</button>
      </div>
    </div>
  )
}

export default CardWithHover
