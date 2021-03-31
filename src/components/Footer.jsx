import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <Link to='/about'>
        <div>About</div>
      </Link>
      <Link to='/form'>
        <div>Add Release</div>
      </Link>
      <Link to='/links'>
        <div>Publisher Links/Contact Me</div>
      </Link>
      <a
        href='https://github.com/foremanlb/comic-release'
        target='_blank'
        rel='noopener noreferrer'>
        Git
      </a>
    </div>
  )
}
