import React from 'react'
import './Section.css'
import bacA2 from './../../assets/Rectangle 19353.png'
const Section = ({p , img}) => {
  return (
<div className="Section5" style={{backgroundImage:`url(${bacA2}`}}>
    <p>{p}</p>
    <img src={img} alt="" />
</div>
  )
}

export default Section