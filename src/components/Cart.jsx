import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { productsData, IcRoundFavoriteBorder, IcRoundShare, IcSharpMoreVert } from '../assets/index'
import '../css/Cart.css'
import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cartItems, removeFromCart, incrementCartItem, decrementCartItem } = useCart()
  console.log(cartItems, 'cartitemsusecntct')

  return (
    <div>
      <span className='content-header'>
        <h3>My cart</h3>
      </span>

      <div className='content-body'>
        <div className='cart-items-container'>
          {cartItems.map((product) =>
            <div key={product._id} className="card horizontal">
              <div className="card-body">
                <div className="img-text">
                  {/* <img src={product.img.source} alt={product.img.alt} /> */}

                  <div className="text-container">
                    <div className="title-text">Speaker</div>
                    <div className="author-text">bluetooth</div>
                  </div>
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  </p>
              </div>

              <div className="foot">
                <div className="action-buttons">
                  <button onClick={() => {
                    incrementCartItem(product)
                  }

                  }>+</button>
                  <span>{cartItems.reduce((ans, item) => {


                    return item._id === product._id ? item.qty : ans

                  }, 0)}</span>
                  <button onClick={() => { decrementCartItem(product) }}>-</button>

                  <button className="btn secondary-btn" onClick={async () =>
                    removeFromCart(product)

                  }>Remove from Cart</button>
                </div>
                <div className="action-icons">
                  <IcRoundFavoriteBorder />
                  <IcRoundShare />
                  <IcSharpMoreVert />
                </div>
              </div>
            </div>

          )}

        </div>
        <div className='cart-summary'>
          <h3>PRICE DETAILS</h3>
          <div>
            <div>
              <span>Price ({cartItems.length} items)</span>
              <span>Rs. {cartItems.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)}</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>Rs. 40</span>
            </div>
            <div>
              <h3>Total Amount</h3>
              <span>Rs. {40 + cartItems.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart