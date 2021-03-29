import React from 'react'
import { useState } from 'react'
import Sort from './Sort'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

export default function Form(props) {
  const [selectedDay, setSelectedDay] = useState(null)
  const [publisher, setPublisher] = useState('')
  const comics = props.comics
  const [hidden, setHidden] = useState(true)
  const [newComic, setNewComic] = useState({
    Title: '',
    Plot: '',
    Date: '',
    Publisher: '',
    Issue:0,
  })

  function newSelect(e) {
    setPublisher((prevState) => e.target.value)
  }

  function hiddenInput(e) {
    if (e.target.value === 'Other') {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  function handleChange(e) {
    let { value, name } = e.target
    setNewComic((prevState) => {
      return {...prevState, [name]: value}
    })
  }
  
  function changeDate() {
    setNewComic((prevState) => {
      return {...prevState, Date: `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
    })
  }

  return (
    <form>
      <select
        onChange={(e) => {
          newSelect(e)
          handleChange(e)
        }}
        name='Publisher'>
        <option value=''>Publisher</option>
        <option value='Marvel'>Marvel</option>
        <option value='DC'>DC</option>
        <option value='Boom!'>Boom!</option>
        <option value='Dark Horse'>Dark Horse</option>
      </select>
      <select onChange={(e) => {
        hiddenInput(e)
        handleChange(e)
      }} name='Title'>
        <Sort comics={comics} publisher={publisher}/>
      </select>
      <input
        type='text'
        onChange={handleChange}
        hidden={hidden} name='Title'></input>
      <input
        type='number'
        onChange={handleChange}
        placeholder='Issue'
        name='Issue'></input>
      <DatePicker
        value={selectedDay}
        onChange={(e) => {
          setSelectedDay(e)
          changeDate()
        }}
        inputPlaceholder="Select a day"
        name='Date'
        />
      <textarea
        rows='10'
        cols='30'
        name='Plot'
        onChange={handleChange}></textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}
