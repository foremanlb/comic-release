import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to='/'>
        <div>Home</div>
      </Link>
      <Link to='/marvel'>
      <div>Marvel</div>
      </Link>
      <Link to='/dc'>
      <div>DC</div>
      </Link>
      <Link to='/indie'>
      <div>Indie</div>
      </Link>
      <Link to='/month'>
      <div>Month</div>
      </Link>
    </div>
  )
}
