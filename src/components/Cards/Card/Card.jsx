import React from 'react'
import './Card.css'

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Card
