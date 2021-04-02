import React from 'react'
import { useState, useEffect } from 'react'
import FindTitles from './FindTitles'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import axios from 'axios'
import {baseURL, config} from '../services/index'
import { useHistory } from 'react-router-dom'
import './Form.css'
import FindPublishers from './FindPublishers'

export default function Form(props) {
  const [selectedDay, setSelectedDay] = useState(null)
  const [publisher, setPublisher] = useState('')
  const comics = props.comics
  const [hiddenTitle, setHiddenTitle] = useState(true)
  const [hiddenPublisher, setHiddenPublisher] = useState(true)
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

  function hiddenInputTitle(e) {
    if (e.target.value === 'Other') {
      setHiddenTitle(false)
    } else {
      setHiddenTitle(true)
    }
  }

  function hiddenInputPublisher(e) {
    if (e.target.value === 'Other') {
      setHiddenPublisher(false)
    } else {
      setHiddenPublisher(true)
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
          hiddenInputPublisher(e)
          handleChange(e)
        }}
        name='Publisher'
        required
        id='publisher'
      >
        <FindPublishers comics={comics} />
      </select>
      <input
        type='text'
        onChange={handleChange}
        hidden={hiddenPublisher}
        name='HiddenPublisher'
        required
        id='hiddenPublisher'
        placeholder='Publisher'></input>
      <select onChange={(e) => {
        hiddenInputTitle(e)
        handleChange(e)
      }} name='Title'
        required
        id='comicTitle'
      >
        <FindTitles comics={comics} publisher={publisher}/>
      </select>
      <input
        type='text'
        onChange={handleChange}
        hidden={hiddenTitle}
        name='HiddenTitle'
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
