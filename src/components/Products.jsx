import '../css/Products.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import { useWishListContext } from '../context/WishListContext'
import Card from './Card'
import { useProductsContext } from '../context/ProductsContext'

const SideBar = ({ sortState }) => {

    const { productsState, productsDispatch } = sortState
    const [categories, setCategories] = useState([])


    useEffect(async () => {
        const ctg = await axios.get('/api/categories')
        setCategories(ctg.data.categories)
    }, [])

    return (
        <aside className='sidebar'>
            <div className='list no-bullet-list'>
                <div className='list-header'>
                    <h3>Filters</h3>
                    <h3 onClick={()=>productsDispatch({type:'clear'})}>—</h3>
                </div>
                <ul>
                    <li>
                        <div className='list no-bullet-list'>
                            <div className='list-header'>
                                <h3>Price</h3>
                            </div>
                            <div className="slidecontainer">
                                <input type="range" min="0" max='6000' value={productsState.filterPrice}
                                onChange={(e) =>
                                    productsDispatch({type:'filterPrice', payload:e.target.value })
                                } className="slider" id="myRange" />
                                <div className='values'>
                                    <span>0</span>
                                    <span>6000</span>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='list no-bullet-list'>
                            <div className='list-header'>
                                <h3>Category</h3>
                            </div>
                            <ul>
                                {categories.map((category) =>
                                    <li key={category.categoryName}><label><input type='checkbox' checked={productsState?.categoryFilter?.find((ctg)=>ctg===category.categoryName)?true:false} onChange={
                                        (e) => {
                                            e.target.checked ? productsDispatch({ type: 'categoryFilter', payload: category.categoryName, addorRemove: 'add' }) :
                                                productsDispatch({ type: 'categoryFilter', payload: category.categoryName, addorRemove: 'remove' })
                                        }
                                    } />{category.categoryName}</label></li>
                                )}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='list no-bullet-list'>
                            <div className='list-header'>
                                <h3>Rating</h3>
                            </div>
                            <ul>
                                <li><label><input type='radio' name='rating' checked={productsState.filterRating>=4} onChange={(e) => (e.target.checked && productsDispatch({type:'filterRating',payload:4}))} />4 stars & above</label></li>
                                <li><label><input type='radio' name='rating' checked={productsState.filterRating<4 && productsState.filterRating>=3} onChange={(e) => (e.target.checked && productsDispatch({type:'filterRating',payload:3}))} />3 stars & above</label></li>
                                <li><label><input type='radio' name='rating' checked={productsState.filterRating<3 && productsState.filterRating>=2} onChange={(e) => (e.target.checked && productsDispatch({type:'filterRating',payload:2}))} />2 stars & above</label></li>
                                <li><label><input type='radio' name='rating' checked={productsState.filterRating<2 && productsState.filterRating>=1} onChange={(e) => (e.target.checked && productsDispatch({type:'filterRating',payload:1}))} />1 stars & above</label></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='list no-bullet-list'>
                            <div className='list-header'>
                                <h3>Sort by</h3>
                            </div>
                            <ul>
                                <li><label><input type='radio' name='price-sort-direction' checked={productsState.priceSortDrn===0} onChange={(e) => (e.target.checked && productsDispatch({ type: 'priceSortDrn', payload: 0 }))} />Price - Low to High</label></li>
                                <li><label><input type='radio' name='price-sort-direction' checked={productsState.priceSortDrn===1} onChange={(e) => (e.target.checked && productsDispatch({ type: 'priceSortDrn', payload: 1 }))} />Price - High to Low</label></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>

    )
}


const Products = () => {
const {cartItems,addToCart,incrementCartItem,decrementCartItem}=useCart()
const {addToWishList,removeFromWishList,wishList}=useWishListContext()
const {state:productsState,dispatch:productsDispatch}=useProductsContext()
    
    return (
        <div className='products-page'>

            <SideBar sortState={{ productsState, productsDispatch }} />
            <main>
                <div className='main-header'>
                    <div className='main-text'><h3>(Showing {productsState.products.length} products)</h3></div>
                </div>

                <div className='main-body'>

                    {productsState.products.map((product) =>
                       <Card key={product._id} details={{product,incrementCartItem,decrementCartItem,addToCart,removeFromWishList,addToWishList,cartItems,wishList}}/>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Products

