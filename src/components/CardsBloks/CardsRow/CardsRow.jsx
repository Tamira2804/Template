import React from 'react'
import './CardsRow.css'
// import CardWithHover from 'components/Cards/CardWithHover/CardWithHover'
import CardBackgroundSizing from 'components/Cards/CardBackgroundSizing/CardBackgroundSizing'
import {
  faInstagram,
  faDribbble,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const CardsRow = () => {
  const cardsData = [
    {
      title: 'Al Pacino',
      backgroundImage:
        'https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg',
      icons: [
        { icon: faInstagram, link: 'https://instagram.com/the.alpacino' },
        { icon: faDribbble, link: 'https://dribbble.com/alpacino' },
        { icon: faTwitter, link: 'https://twitter.com/alpacino' },
        { icon: faFacebook, link: 'https://facebook.com/alpacino' },
      ],
    },
    {
      title: 'Ben Stiller',
      backgroundImage:
        'https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg',
      icons: [
        { icon: faInstagram, link: 'https://instagram.com/benstiller' },
        { icon: faDribbble, link: 'https://dribbble.com/alpacino' },
        { icon: faTwitter, link: 'https://twitter.com/alpacino' },
        { icon: faFacebook, link: 'https://facebook.com/alpacino' },
      ],
    },
    {
      title: 'Patrick Stewart',
      backgroundImage:
        'https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg',
      icons: [
        { icon: faInstagram, link: 'https://instagram.com/patrick.stewart' },
        { icon: faDribbble, link: 'https://dribbble.com/alpacino' },
        { icon: faTwitter, link: 'https://twitter.com/alpacino' },
        { icon: faFacebook, link: 'https://facebook.com/alpacino' },
      ],
    },
  ]
  return (
    <div className='cards-wrapper'>
      {/* <CardWithHover
        title='Mountain View'
        text='Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains'
        backgroundImage='https://plus.unsplash.com/premium_photo-1667530527025-0dbeb1777692?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <CardWithHover
        title='To The Beach'
        text='Plan your next beach trip with these fabulous destinations'
        backgroundImage='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGJlYWNofGVufDB8fHx8MTY5Mjg1NTI3Mg&ixlib=rb-4.0.3&q=80&w=1080'
      />
      <CardWithHover
        title='Desert Destinations'
        text='Its the desert youve always dreamed of'
        backgroundImage='https://images.unsplash.com/20/dusty-sky.JPG?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <CardWithHover
        title='Explore The Galaxy'
        text='Seriously, straight up, just blast off into outer space today'
        backgroundImage='https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      /> */}
      {cardsData.map((card, index) => (
        <CardBackgroundSizing
          key={index}
          title={card.title}
          backgroundImage={card.backgroundImage}
          icons={card.icons}
        />
      ))}
    </div>
  )
}

export default CardsRow
