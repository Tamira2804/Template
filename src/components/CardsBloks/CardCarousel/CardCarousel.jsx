import React, { useState } from 'react'
import './CardCarousel.css'

const MAX_VISIBILITY = 3

const CardCarousel = ({ children }) => {
  const [active, setActive] = useState(2)
  const count = React.Children.count(children)

  return (
    <div className='carousel'>
      {active > 0 && (
        <button className='nav left' onClick={() => setActive((i) => i - 1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z' />
          </svg>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            pointerEvents: active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className='nav right' onClick={() => setActive((i) => i + 1)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z' />
          </svg>
        </button>
      )}
    </div>
  )
}

export default CardCarousel
