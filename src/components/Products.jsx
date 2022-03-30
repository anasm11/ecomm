import '../css/Products.css'
import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import { useWishListContext } from '../context/WishListContext'
import Card from './Card'

const SideBar = ({ sortState }) => {

    const { dispatch } = sortState
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
                    <h3>—</h3>
                </div>
                <ul>
                    <li>
                        <div className='list no-bullet-list'>
                            <div className='list-header'>
                                <h3>Price</h3>
                            </div>
                            <div className="slidecontainer">
                                <input type="range" min="0" max="6000" defaultValue='6000' 
                                onChange={(e) =>
                                    dispatch({type:'filterPrice', payload:e.target.value })
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
                                    <li key={category.categoryName}><label><input type='checkbox' defaultChecked onChange={
                                        (e) => {console.log(category)
                                            e.target.checked ? dispatch({ type: 'categoryFilter', payload: category.categoryName, addorRemove: 'add' }) :
                                                dispatch({ type: 'categoryFilter', payload: category.categoryName, addorRemove: 'remove' })
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
                                <li><label><input type='radio' name='rating' onChange={(e) => (e.target.checked && dispatch({type:'filterRating',payload:4}))} />4 stars & above</label></li>
                                <li><label><input type='radio' name='rating' onChange={(e) => (e.target.checked && dispatch({type:'filterRating',payload:3}))} />3 stars & above</label></li>
                                <li><label><input type='radio' name='rating' onChange={(e) => (e.target.checked && dispatch({type:'filterRating',payload:2}))} />2 stars & above</label></li>
                                <li><label><input type='radio' name='rating' onChange={(e) => (e.target.checked && dispatch({type:'filterRating',payload:1}))} />1 stars & above</label></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='list no-bullet-list'>
                            <div className='list-header'>
                                <h3>Sort by</h3>
                            </div>
                            <ul>
                                <li><label><input type='radio' name='price-sort-direction' onChange={(e) => (e.target.checked && dispatch({ type: 'priceSortDrn', payload: 0 }))} />Price - Low to High</label></li>
                                <li><label><input type='radio' name='price-sort-direction' onChange={(e) => (e.target.checked && dispatch({ type: 'priceSortDrn', payload: 1 }))} />Price - Low to High</label></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>

    )
}

const filterItems=(state,allProducts)=>{
    console.log(state.filterPrice,'fromfilter')
    var prodcts = allProducts.filter((prdct) => {
        for (let i in state.categoryFilter) {
            if (prdct.categoryName === state.categoryFilter[i])
                return true
        }
        return false
    })

     let x=prodcts.filter((item)=>parseInt(item.rating)>=parseInt(state.filterRating))

     let y=[...x].filter((item)=>{
         console.log(item,state.filterPrice,'ppp')
        return parseInt(item.price)<=parseInt(state.filterPrice)
        })

    return y
}



const Products = () => {
const {cartItems,addToCart,incrementCartItem,decrementCartItem}=useCart()
const {addToWishList,removeFromWishList,wishList}=useWishListContext()
console.log(wishList,'wishfromprod')

    const [allProducts, setAllProducts] = useState([])

    useEffect(async () => {
        const { data } = await axios.get('/api/products')
        setAllProducts(data.products)
    }, [])

    useEffect(async () => {
        dispatch({ ...state, products: allProducts })
    }, [allProducts])


    const reducer = (state, action) => {

        switch (action.type) {
            case ('categoryFilter'): {
                let x = state.categoryFilter
                if (action.addorRemove === 'add')
                    x.push(action.payload)
                else x = x.filter((item) => {
                    console.log(x, item, action.payload, 'lll')
                    return action.payload !== item
                }
                )

                var prodcts=filterItems({ ...state, categoryFilter: x },allProducts)
                return { ...state, products: prodcts, categoryFilter: x }
            }

            case('filterRating'):{
                var prodcts=filterItems({...state,filterRating:action.payload},allProducts)

                return {...state,filterRating:action.payload,products:prodcts}
            }

            case('filterPrice'):{
                console.log(action.payload,'payload val')
                var prdcts=filterItems({...state,filterPrice:action.payload},allProducts)

                return {...state,filterPrice:action.payload,products:prdcts}
            }

            case ('priceSortDrn'): {
                let y = state.products
                if (parseInt(action.payload) === 0) { console.log('yes'); y.sort((a, b) => parseInt(a.price) - parseInt(b.price)) }
                else if (action.payload === 1)
                    y.sort((a, b) => parseInt(b.price) - parseInt(a.price))
                return { ...state, products: y, priceSortDrn: action.payload }
            }
        }


        return { ...state, products: allProducts }
    }

    const [state, dispatch] = useReducer(reducer, { filterRating: 0, priceSortDrn: null, products: allProducts, categoryFilter: ['fiction', 'non-fiction', 'horror'], filterPrice: Number.MAX_SAFE_INTEGER })

    return (
        <div className='products-page'>

            <SideBar sortState={{  dispatch }} />
            <main>
                <div className='main-header'>
                    <div className='main-text'><h3>Showing All Products</h3></div>
                    <div className='sub-text'><span>(Showing 20 products)</span></div>
                </div>

                <div className='main-body'>

                    {state.products.map((product) =>
                       <Card key={product._id} details={{product,incrementCartItem,decrementCartItem,addToCart,removeFromWishList,addToWishList,cartItems,wishList}}/>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Products

