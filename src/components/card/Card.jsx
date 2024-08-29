import React from 'react'
import'./Card.css'
const Card = ({img , decimg , dec}) => {
  return (
    <div className='card-border'>
        <img src={img} />
        <h3 >{decimg}</h3>
        <p>{dec}</p>
    </div>
  )
}

export default Card 