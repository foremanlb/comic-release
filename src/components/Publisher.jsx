import React from 'react'
import {useParams} from 'react-router-dom'

export default function Publisher() {
  const params = useParams()
  
  console.log(params.Publisher)
  
  if (params.Publisher === 'marvel') {
    return <div>Marvel</div>
  } else if (params.Publisher === 'dc') {
    return <div>DC</div>
  } else {
    return <div>Indie</div>
  }

 
}
