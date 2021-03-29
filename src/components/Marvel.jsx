import React from 'react'
import {useState, useEffect} from 'react'

export default function DC(props) {
  const comics = props.comics
  const [titles, setTitles] = useState([])

  useEffect(() => {
    getComics()
  }, [])

  function getComics() {
    const newArr = []
    comics.map((comic) => {
      if (comic.fields.Publisher === 'Marvel') {
        newArr.push(comic.fields.Title)
      }
      const unique = [...new Set(newArr)]
      setTitles(unique)
    })
  }
  
  return (
    <>
      {titles.map((title) => {
        return <h4 key={title}>{title}</h4>
      })}
    </>
  )
}