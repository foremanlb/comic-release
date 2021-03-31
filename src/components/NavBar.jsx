import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navDiv'>
      <ul className='nav'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <li className='navButton'>Home</li>
        </Link>
        <Link to='/marvel' style={{ textDecoration: 'none' }}>
          <li className='navButton'>Marvel</li>
        </Link>
        <Link to='/dc' style={{ textDecoration: 'none' }}>
          <li className='navButton'>DC</li>
        </Link>
        <Link to='/indie' style={{ textDecoration: 'none' }}>
          <li className='navButton'>Indie</li>
        </Link>
        <Link to='/month' style={{ textDecoration: 'none' }}>
          <li className='navButton'>Month</li>
        </Link>
      </ul>
    </div>
  )
}
