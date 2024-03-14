// TODO: create a component that displays a single bakery item
import React from 'react'
import './BakeryItem.css'


export default function BakeryItem({ name, description, price, image, addToCart }) {
  return (
    <div className="bakery-item-container">
        <img src={image} alt="name"/>
        <div className="body-container">
            <div className="text-container">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="bottom-container">
                <p>{price}</p>
                <button onClick={() => addToCart(name, price)} className="button"><p>Add to Cart</p></button>
            </div>
        </div>
    </div>

  )
}
