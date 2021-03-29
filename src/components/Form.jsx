import React from 'react'
import { useState } from 'react'
import Sort from './Sort'

export default function Form(props) {
  const [publisher, setPublisher] = useState('')
  const comics = props.comics
  const [hidden, setHidden] = useState(true)

  function newSelect(e) {
    setPublisher((prevState) => e.target.value)
  }

  function handleChange(e) {
    if (e.target.value === 'Other') {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  return (
    <form>
      <select onChange={newSelect}>
        <option value=''>Publisher</option>
        <option value='Marvel'>Marvel</option>
        <option value='DC'>DC</option>
        <option value='Boom!'>Boom!</option>
        <option value='Dark Horse'>Dark Horse</option>
      </select>
      <select onChange={handleChange}>
        <Sort comics={comics} publisher={publisher}/>
      </select>
      <input
        type='text'
        hidden={hidden}></input>
      <input type='number'></input>
    </form>
  )
}
