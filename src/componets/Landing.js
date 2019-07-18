import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input type='text' className='search' placeholder='search' />
      <Link to='/search' className='browse-all'>or Browse All</Link>
    </div>
  </div>
)

export default Landing
