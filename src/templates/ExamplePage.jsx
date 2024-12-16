import React from 'react'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card'
import Form from '../components/Form/Form'
import './ExamplePage.css'

const ExamplePage = () => {
  return (
    <div className='example-page'>
      <Header />
      <div className='content'>
        <Card
          title='Card Title'
          content='This is a card description.'
          imageUrl='https://via.placeholder.com/150'
        />
        <Form />
      </div>
    </div>
  )
}

export default ExamplePage
