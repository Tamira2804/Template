import React from 'react'
import './CardsRow.css'
import CardWithHover from 'components/Cards/CardWithHover/CardWithHover'

const CardsRow = () => {
  return (
    <div className='cards-wrapper'>
      <CardWithHover
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
      />
    </div>
  )
}

export default CardsRow
