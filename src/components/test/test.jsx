
import React, { useState } from 'react'
import img1 from './../../assets/p1.png'
import img2 from './../../assets/p2.png'
import img3 from './../../assets/p3.png'
import img4 from './../../assets/p4.png'
import img5 from './../../assets/p5.png'
import img6 from './../../assets/p6.png'


import './test.css'

function test() {
    const [products , setProducts] = useState([
        {
            img :img1,
            history :"27, September 2023",
            people :"+30 people",
            place:"Maldives",
            dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            price:"3000 $",
            staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
            star:"5.0"},
            {
              img :img2,
              history :"13, October 2023",
              people :"+120 people",
              place:"Switzerland",
              dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
              price:"1290 $",
              staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
              star:"4.9"},
              {
                img:img3,
                history :"2,November 2023",
                people :"+139 people",
                place:"Berlin",
                dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
                price:"2790 $",
                staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
                star:"5.0"},
                {
                  img :img4,
                  history :"14, December 2023",
                  people :"+50 people",
                  place:"Torronto",
                  dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
                  price:"1110 $",
                  staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
                  star:"4.0"},
                  {
                    img :img5,
                    history :"20, September 2023",
                    people :"+80 people",
                    place:"Baku",
                    dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
                    price:"1220 $",
                    staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
                    star:"4.5"},
                    {
                      img :img6,
                      history :"27, August 2023",
                      people :"+100 people",
                      place:"Chinese",
                      dec:"Qui tempore voluptate qui quia commodi rem praesentium alias et.",
                      price:"2500 $",
                      staricon:"https://cdn.im.education/img/svgs/regular/white-star.svg?t=2",
                      star:"5.0"}
            
    ])
  return (
    <div className="father-cart">
        {products.map(product=>(
          <div className="cart">
        <div className="img">
      <img src={product.img} alt="" />
      <div className="his">
    <p className="hist">{product.history}</p>
    <p className="people">{product.people}</p>
    </div>
      </div>
    <h3 className="place">{product.place}</h3>
    <p className="deck">{product.dec}</p>
    <div className="info">
      <p className="price">{product.price}</p>
      <div className="dstar"> 
      <img src={product.staricon}  className="star" />
      <p className="star">{product.star}</p>
      </div>
    </div>
    </div>))}
    
    </div>
  )
}

export default test