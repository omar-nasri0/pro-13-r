import React from 'react'
import './Section.css'

const Section = (props) => {
  return (
   <div className="Section3">
    <p className='p'>trendy</p>
    <h1 className='h1'>Our Trending Tour Packages</h1>
  <div className="father-3">
  {props.children}
  </div>
   </div>
  )
}

export default Section