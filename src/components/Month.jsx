import React from 'react'
import Calendar from 'react-calendar'
import { useState,} from 'react'
import {useHistory} from 'react-router-dom'

export default function Month(props) {
  const [value, onChange] = useState(new Date())
  const [day, setDay] = useState('')
  const [dayFill, setDayFill] = useState('')
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

  // function fillDay(date) {
  //   console.log(date)
  //   // const date = value.toISOString()
  //   // setDayFill(date.slice(0, 10))
  //   comics.map((comic) => {
  //     if (comic.Date === dayFill) {
  //       return <div>{comic.Title}</div>
  //     } else {
  //       return <></>
  //     }
  //   })
  // }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={clickDay}
        // tileContent={fillDay(date)}
      />
      <div>{day.slice(5)}</div>
      <button onClick={checkDay}>See Day</button>
    </div>
  )
}
