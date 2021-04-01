import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navDiv'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className='navButton'>Home</div>
        </Link>
        <Link to='/marvel' style={{ textDecoration: 'none' }}>
          <div className='navButton'>Marvel</div>
        </Link>
        <Link to='/dc' style={{ textDecoration: 'none' }}>
          <div className='navButton'>DC</div>
        </Link>
        <Link to='/indie' style={{ textDecoration: 'none' }}>
          <div className='navButton'>Indie</div>
        </Link>
        <Link to='/calendar' style={{ textDecoration: 'none' }}>
          <div className='navButton'>Calendar</div>
        </Link>
    </div>
  )
}
