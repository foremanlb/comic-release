import React from 'react'
import { useState, useEffect } from 'react'
import Sort from './Sort'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import axios from 'axios'
import {baseURL, config} from '../services/index'
import { useHistory } from 'react-router-dom'
import './Form.css'

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
  const today = new Date()
  const history = useHistory()

  useEffect(() => {
    setSelectedDay({
      day: today.getDate(),
      month: (today.getMonth() + 1),
      year: today.getFullYear(),
    })
  }, [])

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

  function handleChangeNumber(e) {
    let { value, name } = e.target
    setNewComic((prevState) => {
      return {...prevState, [name]: parseInt(value)}
    })
  }
  
  function changeDate() {
    setNewComic((prevState) => {
      return {...prevState, Date: `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`}
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post(baseURL, { fields: newComic }, config)
    alert('Thank You for Submitting')
    props.setToggle((prevState) => !prevState)
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <select
        onChange={(e) => {
          newSelect(e)
          handleChange(e)
        }}
        name='Publisher'
        required
        id='publisher'
        >
        <option value=''>Publisher</option>
        <option value='Marvel'>Marvel</option>
        <option value='DC'>DC</option>
        <option value='Boom!'>Boom!</option>
        <option value='Dark Horse'>Dark Horse</option>
      </select>
      <select onChange={(e) => {
        hiddenInput(e)
        handleChange(e)
      }} name='Title'
        required
        id='comicTitle'
      >
        <Sort comics={comics} publisher={publisher}/>
      </select>
      <input
        type='text'
        onChange={handleChange}
        hidden={hidden}
        name='Title'
        required
        id='hiddenTitle'
        placeholder='Title...replace / with \'></input>
      <input
        type='number'
        onChange={handleChangeNumber}
        placeholder='Issue'
        name='Issue'
        required
        id='issue'></input>
      <DatePicker
        value={selectedDay}
        onChange={(e) => {
          setSelectedDay(e)
          changeDate()
        }}
        inputPlaceholder="Select a day"
        name='Date'
        calendarClassName='responsive-calendar'
        required
        />
      <textarea
        rows='10'
        cols='30'
        name='Plot'
        onChange={handleChange}
        placeholder='Plot'
        required
        id='plot'></textarea>
      <button type='submit' id='submit'>Submit</button>
    </form>
  )
}
