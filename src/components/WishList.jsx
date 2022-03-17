import React from 'react'
import '../css/WishList.css'
import {productsData,IcRoundFavorite,IcRoundShare,IcSharpMoreVert} from '../assets/index'


const WishList = () => {
    return (
        <div>
            <span class='content-header'>
        <h3>Wishlist</h3>
    </span>
    
    <div class='wishlist-content-body'>
    {productsData.map((product)=>
        <div className="card">
        <div className="card-body">
        <div className="figure-with-badge">
            <img src={product.img.source} alt={product.img.alt} />
        </div>
        <div className="text-container">
            <div className="title-text">Shirt</div>
            <div className="author-text">cotton</div>
        </div>
        </div>
    
        <div className="foot">
            <div className="action-buttons">
                <button className='btn primary-btn'>Add to cart</button>
            </div>
            <div className="action-icons">
            <IcRoundFavorite/>
                <IcRoundShare/>
                <IcSharpMoreVert/>
            </div>
        </div>
    </div>
   
        
        )}</div>

        </div>
    )
}

export default WishList
