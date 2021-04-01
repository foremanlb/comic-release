import React from 'react'
import { useParams } from 'react-router-dom'
import './Titles.css'

export default function Titles(props) {
  const comics = props.comics
  const title = useParams()
  console.log(title)

  return (
    <div className='titleContainer'>
      {comics.map((comic) => {
        if (comic.fields.Title === title.Title) {
          const date = comic.fields.Date
          const newDate = date.split('-')
          console.log(newDate)
          return (
            <div className='titleCard' key={comic.id}>
              <h3>{comic.fields.Title}</h3>
              <h4>Issue # {comic.fields.Issue}</h4>
              <h4>{comic.fields.Publisher}</h4>
              <p>{comic.fields.Plot}</p>
              <p>Release Date{newDate[1]}/{newDate[2]}/{newDate[0]}</p>
            </div>
          )}
      })}
    </div>
  )
}
