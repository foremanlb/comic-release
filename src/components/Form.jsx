import React from 'react'
import { useState } from 'react'
import Sort from './Sort'

export default function Form(props) {
  const [publisher, setPublisher] = useState('')
  const comics = props.comics

  function newSelect(e) {
    setPublisher((prevState) => e.target.value)
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
      <select>
        <Sort comics={comics} publisher={publisher}/>
      </select>
    </form>
  )
}
