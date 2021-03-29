import React from 'react'

export default function DC(props) {
  const comics = props.comics
  
  return (
    <>
      {comics.map((comic) => {
        if (comic.fields.Publisher === 'DC') {
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
