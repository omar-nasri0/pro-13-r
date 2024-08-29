import React from 'react'
import './Card.css'

const Card = ({img , pro , dec , btn}) => {
  return (
   <div className="tow-card" >
    <img src={img} alt="" />

    <div className="position">
    <p>{pro}</p>
    <h4>{dec}</h4>
    <p className='btn'>{btn}</p>
    </div>
   </div>
  )
}

export default Card