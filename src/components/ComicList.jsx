import React from 'react'
import { Link } from 'react-router-dom'
import './ComicList.css'



export default function ComicList(props) {
  const titles = props.titles
  return (
    <ul className='comicList'>
      {titles.map((title) => {
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
