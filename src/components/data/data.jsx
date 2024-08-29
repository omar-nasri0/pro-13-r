
import React from 'react'

function data() {
    const products =[
        {
            img :'./../../assets/p1.png',
            history :"27, September 2023",
            people :"+30 people",
            place:"Maldives",
            dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            price:"3000$",
            staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
            star:"5.0"},
        
    ]
    localStorage.setItem('product' , JSON.stringify(products))
  return (
    <div className=""></div>
  )
}

export default data