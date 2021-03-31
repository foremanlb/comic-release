import React from 'react'
import { useParams } from 'react-router-dom'
import './Day.css'


export default function Day(props) {
  const comics = props.comics
  const date = useParams()
  console.log(date)

  return (
    <div className='dayList'>
      <h3 className='dayItems'>Releases for {date.Date.slice(5)}</h3>
      {comics.map((comic) => {
        if (comic.fields.Date === date.Date) {
          const release = comic.fields.Date
          const newDate = release.split('-')
          console.log(newDate)
          return (
            <div className='comicCard'>
              <h3>{comic.fields.Title}</h3>
              <h4>Issue # {comic.fields.Issue}</h4>
              <h4>{comic.fields.Publisher}</h4>
              <p>{comic.fields.Plot}</p>
              <p>Release Date{newDate[1]}/{newDate[2]}/{newDate[0]}</p>
            </div>
          )
        }
      })}
      <h3 className='dayItems'>Try Another Day</h3>
    </div>
  )
}
