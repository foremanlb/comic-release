import React from 'react'
import { useState, useEffect } from 'react'
import ComicList from './ComicList'

export default function DC(props) {
  const comics = props.comics
  const [titles, setTitles] = useState([])

  useEffect(() => {
    getComics()
  }, [])

  function getComics() {
    const newArr = []
    comics.map((comic) => {
      if (comic.fields.Publisher !== 'Marvel' && comic.fields.Publisher !== 'DC'
      ) {
        newArr.push(comic.fields.Title)
      }
      const unique = [...new Set(newArr)]
      setTitles(unique.sort())
    })
  }
  
  return (
    <ComicList titles={titles} />
  )
}