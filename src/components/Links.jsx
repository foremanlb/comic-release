import React from 'react'
import './Links.css'

export default function Links() {
  return (
    <div id='links'>
      <div className='linkBox'>
        <a
          href='https://www.dccomics.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='contactLinks'>DC Comics</a>
      </div>
      <div className='linkBox'>
        <a
          href='https://www.marvel.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='contactLinks'>Marvel Comics</a>
      </div>
      <div className='linkBox'>
        <a
          href='https://www.boom-studios.com/wordpress/'
          target='_blank'
          rel='noopener noreferrer'
          className='contactLinks'>Boom!</a>
      </div>
      <div className='linkBox'>
        <a
          href='https://www.darkhorse.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='contactLinks'>Dark Horse</a>
      </div>
      <div className='linkBox'>
        <a
          href='mailto: releasethecomics@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='contactLinks'>Email Me</a>
      </div>
    </div>
  )
}
