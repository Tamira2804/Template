import React from 'react'
import Header from '../components/Header/Header'
// import Card from '../components/Cards/Card/Card'
import CardsRow from 'components/CardsBloks/CardsRow/CardsRow'
// import Form from '../components/Form/Form'
// import CardCarousel from 'components/Cards/CardCarousel/CardCarousel'
// import CardForCarousel from 'components/CardsBloks/CardForCarousel/CardForCarousel'
import './ExamplePage.css'

const ExamplePage = () => {
  return (
    <div className='example-page'>
      <Header />
      <div className='content'>
        {/* <Card
          title='Card Title'
          content='This is a card description.'
          imageUrl='https://via.placeholder.com/150'
        /> */}

        {/* <div className='section2'>
          <CardCarousel>
            <CardForCarousel
              title='Card 1'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <CardForCarousel
              title='Card 2'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <CardForCarousel
              title='Card 3'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <CardForCarousel
              title='Card 4'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <CardForCarousel
              title='Card 5'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
          </CardCarousel>
        </div> */}
        <CardsRow />
        {/* <Form /> */}
      </div>
    </div>
  )
}

export default ExamplePage
