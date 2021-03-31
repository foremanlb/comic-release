import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PublisherList.css'

export default function DC(props) {
  const comics = props.comics
  const [titles, setTitles] = useState([])

  useEffect(() => {
    getComics()
  }, [])

  function getComics() {
    const newArr = []
    comics.map((comic) => {
      if (comic.fields.Publisher === 'DC') {
        newArr.push(comic.fields.Title)
      }
      const unique = [...new Set(newArr)]
      setTitles(unique.sort())
    })
  }
  
  return (
    <ul className='comicList'>
      {titles.map((title) => {
        return (
          <div className='comicItem'>
            <Link to={`/comics/${title}`}
              className='comicLink'>
              <li className='comicTitle'
              key={title}>{title}</li>
            </Link>
          </div>)
      })}
    </ul>
  )
}
