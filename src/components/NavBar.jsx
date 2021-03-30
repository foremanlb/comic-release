import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navDiv'>
      <ul className='nav'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <li>Home</li>
        </Link>
        <Link to='/marvel' style={{ textDecoration: 'none' }}>
          <li>Marvel</li>
        </Link>
        <Link to='/dc' style={{ textDecoration: 'none' }}>
          <li>DC</li>
        </Link>
        <Link to='/indie' style={{ textDecoration: 'none' }}>
          <li>Indie</li>
        </Link>
        <Link to='/month' style={{ textDecoration: 'none' }}>
          <li>Month</li>
        </Link>
      </ul>
    </div>
  )
}
