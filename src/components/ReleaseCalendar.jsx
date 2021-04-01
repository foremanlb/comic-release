import React from 'react'
import Calendar from 'react-calendar'
import { useState,} from 'react'
import { useHistory } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import './ReleaseCalendar.css'

export default function ReleaseCalendar(props) {
  const [value, onChange] = useState(new Date())
  const [day, setDay] = useState('')
  let history = useHistory()
  const comics = props.comics


  function clickDay(value) {
    const date = value.toISOString()
    setDay(date.slice(0, 10))
  }
  
  function checkDay() {
    if (day === '') {
      alert('Select Day First')
    } else {
      history.push(`/month/${day}`)
    }
  }

  function fillDay({ date, view }) {
    const arr = []
    comics.map((comic) => {
        arr.push(comic.fields.Date)
      })
    if (arr.includes(date.toISOString().slice(0, 10)) === true && view === 'month')
      return <p className='tileFill'>Release Day</p>
  }


  return (
    <div className='monthDiv'>
      <h3 className='calendarTitle'>Select Day To See Releases!</h3>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={clickDay}
        tileContent={fillDay}
        calendarType='US'
      />
      <div className='dayDisplay'>{day.slice(5)}</div>
      <button onClick={checkDay} id='showDay'>See Day</button>
    </div>
  )
}
