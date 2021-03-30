import React from 'react'
import Calendar from 'react-calendar'
import { useState,} from 'react'
import {useHistory} from 'react-router-dom'

export default function Month(props) {
  const [value, onChange] = useState(new Date())
  const [day, setDay] = useState('')
  let history = useHistory()
  const comics = props.comics


  function clickDay(value, event) {
    const date = value.toISOString()
    setDay(date.slice(0, 10))
  }
  
  function checkDay() {
    if (day === '') {
      alert('Select Day First')
    } else {
      history.push(`/day/${day}`)
    }
  }

  function fillDay({ date, view }) {
    const arr = []
    comics.map((comic) => {
        arr.push(comic.fields.Date)
      })
    if (arr.includes(date.toISOString().slice(0, 10)) === true && view === 'month')
      return <p>Release Day</p>
  }


  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={clickDay}
        tileContent={fillDay}
      />
      <div>{day.slice(5)}</div>
      <button onClick={checkDay}>See Day</button>
    </div>
  )
}
