import React from 'react'
import './CardBackgroundSizing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardBackgroundSizing = ({ title, backgroundImage, icons }) => {
  return (
    <div>
      <div
        className='cards'
        style={{ '--background-image': `url(${backgroundImage})` }} // Передаємо змінну в CSS
      >
        <div class='border'>
          <h2>{title}</h2>
          <div class='icons'>
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={icon.icon} size='1x' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBackgroundSizing
