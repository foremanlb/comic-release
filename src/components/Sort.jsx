import React from 'react'
import { useState, useEffect } from 'react'


export default function Sort(props) {
  const [titles, setTitles] = useState([])
  const comics = props.comics
  const publisher = props.publisher

  useEffect(() => {
    getTitles()
  }, [publisher])

  function getTitles() {
    const newArr = []
    comics.map((comic) => {
      if (comic.fields.Publisher === publisher) {
        newArr.push(comic.fields.Title)
      }
      const unique = [...new Set(newArr)]
      setTitles(unique)
      return null
    })
  }


  return (
    <>
      <option value=''>Choose Title</option>
      {titles.map((title) => {
        return <option value={title}>{title}</option>
      })}
      <option value='Other'>Other</option>
      </>
  )
}
