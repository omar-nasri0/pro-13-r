import React from 'react'
import './Section.css'
import bacA from './../../assets/Ellipse 626.png'

const Section = ({h5 , h1 , p , btn}) => {
  return (
<div className="Section4">
    <div className="father-4">
        <h5>{h5}</h5>
        <h1>{h1}</h1>
        <p>{p}</p>
        <button>{btn}</button>
    </div>
    <div className="father-5">
        <img src={bacA} alt="" />
    </div>
</div>
  )
}

export default Section