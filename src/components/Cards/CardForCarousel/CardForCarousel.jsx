import React from 'react'
import './CardForCarousel.css'

const CardForCarousel = ({ title, content }) => {
  return (
    <div className='card-for-carousel'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default CardForCarousel
