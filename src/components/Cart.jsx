import React from 'react'
import {productsData,IcRoundFavoriteBorder,IcRoundShare,IcSharpMoreVert} from '../assets/index'
import '../css/Cart.css'

const Cart=()=>{
    return (
        <div>
        <span className='content-header'>
        <h3>My cart</h3>
    </span>
    
    <div className='content-body'>
        <div className='cart-items-container'>
            {productsData.map((product)=>
                <div className="card horizontal">
                <div className="card-body">
                  <div className="img-text">
                    <img src={product.img.source} alt={product.img.alt} />
  
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
                    <button className="btn secondary-btn">Buy Now</button>
                  </div>
                  <div className="action-icons">
                    <IcRoundFavoriteBorder/>
                    <IcRoundShare/>
                    <IcSharpMoreVert/>
                  </div>
                </div>
            </div>
            
            )}

           </div>
        <div className='cart-summary'>
            <h3>PRICE DETAILS</h3>
            <div>
                <line>
                    <left>Price (2 items)</left>
                    <right>Rs. 4999</right>
                </line>
                <line>
                    <left>Discount</left>
                    <right>-Rs. 1999</right>
                </line>
                <line>
                    <left>Delivery</left>
                    <right>Rs. 40</right>
                </line>
                <line>
                    <h3>Total Amount</h3>
                    <right>Rs. 40</right>
                </line>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Cart