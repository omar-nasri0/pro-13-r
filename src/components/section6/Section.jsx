import React from 'react'
import './Section.css'
import bgA from './../../assets/about-us-img-2 1.png'
const Section = ({h5 , h1 , p , sen1 ,sen2 , sen3 , sen4}) => {
  return (
<div className="Section6">
<div className="father-7">
        <img src={bgA} alt="" />
    </div>
    <div className="father-6">
        <h5>{h5}</h5>
        <h1>{h1}</h1>
        <p>{p}</p>
        <div className="app">
        <div className="sen1">
            <p>{sen1}</p>
            <p>{sen3}</p>
        </div>
        <div className="sen2">
        <p>{sen2}</p>
        <p>{sen4}</p>
        </div>
        </div>
    </div>
    
</div>
  )
}

export default Section