import React from 'react'
import '../css/WishList.css'
import Card from './Card'
import { useCart } from '../context/index'
import { useWishListContext } from '../context/index'


const WishList = () => {
    const { cartItems, addToCart, incrementCartItem, decrementCartItem } = useCart()
    const { addToWishList, removeFromWishList, wishList } = useWishListContext()
    return (
        <div>
            <span className='content-header'>
                <h3>Wishlist</h3>
            </span>

            <div className='wishlist-content-body'>
                {wishList.map((product) =>
                    <Card key={product._id} details={{ product, incrementCartItem, decrementCartItem, addToCart, removeFromWishList, addToWishList, cartItems, wishList }} />


                )}</div>

        </div>
    )
}

export default WishList
