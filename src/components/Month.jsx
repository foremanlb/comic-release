import React from 'react'
import Calendar from 'react-calendar'
import { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function Month() {
  const [value, onChange] = useState(new Date())
  const [dayLink, setDayLink] = useState('')
  let history = useHistory()

  function clickDay(value, event) {
    const day = value.toISOString()
    setDayLink(day.slice(0, 10))
  }
  
  function checkDay() {
    if (dayLink === '') {
      alert('Select Day First')
    } else {
      history.push(`/day/${dayLink}`)
    }
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={clickDay}
      />
      <button onClick={checkDay}>See Day</button>
    </div>
  )
}
