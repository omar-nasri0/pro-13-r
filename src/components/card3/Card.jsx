import React from 'react'
import './Card.css'
const Card = ({img , imgfly , dec , name , star , group , btn}) => {
  return (
    <div className="card-info">
        <img src={img}  className='big-img'/>
        <img src={imgfly} className='small-img' />
        <img src={group} alt="" className='group' />

        <div className="flex-star">
        <p className='country-name'>{name}</p>
            <img src={star} alt="" className='star'/>
            
            </div>

        <p className='dec'>{dec}</p>
        <button className='btn'>{btn}</button>
    </div>
  )
}

export default Card