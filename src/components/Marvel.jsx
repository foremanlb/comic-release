import React from 'react'

export default function Marvel(props) {
  const comics = props.comics
  
  return (
    <>
      {comics.map((comic) => {
        if (comic.fields.Publisher === 'Marvel') {
          return <h4 key={comic.id}>
            {comic.fields.Title}
          </h4>
        } else {
          return null
        }
      })}
      </>
  )


}
