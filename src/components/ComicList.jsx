import React from 'react'
import { Link } from 'react-router-dom'
import './ComicList.css'



export default function ComicList(props) {
  return (
    <ul className='comicList'>
      {props.titles.map((title) => {
        return (
          <div className='comicItem' key={title}>
            <Link to={`/comics/${title}`}
              className='comicLink' >
              <li className='comicTitle'
              >{title}</li>
            </Link>
          </div>)
      })}
    </ul>
  )
}
