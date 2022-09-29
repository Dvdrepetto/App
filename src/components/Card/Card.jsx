import React from 'react'
import { useEffect, useState } from 'react';
import './Card.css'

const Card = () => {
    const [results, setResults] = useState(null)
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>  response.json().then(res => setResults(res)))
}, [results])
return (

    <div className='card-container'>
{results?.map( (result) => (
 <div className="card" key={result.id}>
  <div>
    <h4><b>{result.title}</b></h4>
    <p>{result.body}</p>
  </div>
</div>
))}
</div>
  )
}

export default Card;



