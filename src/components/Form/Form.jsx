import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form className='form'>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Enter your name' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='Enter your email' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
