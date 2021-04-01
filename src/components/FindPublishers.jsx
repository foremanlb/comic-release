import React from 'react'
import { useState, useEffect } from 'react'


export default function Sort(props) {
  const [publishers, setPublishers] = useState([])

  useEffect(() => {
    getTitles()
  }, [])

  function getTitles() {
    const newArr = []
    props.comics.map((comic) => {
      newArr.push(comic.fields.Publisher)
      const unique = [...new Set(newArr)]
      setPublishers(unique.sort())
      return null
    })
  }


  return (
    <>
      <option value=''>Publisher</option>
      {publishers.map((publisher) => {
        return <option value={publisher}>{publisher}</option>
      })}
      <option value='Other'>Other</option>
      </>
  )
}