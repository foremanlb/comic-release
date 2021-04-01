import React from 'react'
import { useState, useEffect } from 'react'


export default function FindTitles(props) {
  const [titles, setTitles] = useState([])
  const publisher = props.publisher

  useEffect(() => {
    getTitles()
  }, [publisher])

  function getTitles() {
    const newArr = []
    props.comics.map((comic) => {
      if (comic.fields.Publisher === publisher) {
        newArr.push(comic.fields.Title)
      }
      const unique = [...new Set(newArr)]
      setTitles(unique.sort())
      return null
    })
  }


  return (
    <>
      <option value=''>Title</option>
      {titles.map((title) => {
        return <option value={title} key={title}>{title}</option>
      })}
      <option value='Other'>Other</option>
      </>
  )
}
