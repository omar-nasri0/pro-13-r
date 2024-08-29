import React from 'react'
let product = JSON.parse(localStorage.getItem('product'))
let place=document.getElementsByClassName('omar')
function main() {
 
    const displayProducts = () => {
      place.innerHTML = product
        .map((item) => {
          var { star, staricon,price, dec,place,people,history,img } = item
          
          
  return (
    <div className="cart">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="his">
            <p className="his">{history}</p>
            <p className="people">{people}</p>
            </div>
            <h3 className="place">{place}</h3>
            <p className="dec">{dec}</p>
            <div className="info">
              <p className="price">{price}</p>
              <p className="star">{star}</p>
              <img src="" alt={staricon} className="star" />
            </div>
            
          </div>
          
  )
})}
displayProducts()
console.log(displayProducts())
}

export default main
