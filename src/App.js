import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import './css/App.css'
import { Navigation, Home, Products, WishList, Cart, Login, Signup } from './components/index'

const App = () => {
    const location = useLocation()
    // console.log(location,'here')
    return (
        <div>
            {location.pathname !== '/login' && location.pathname !== '/signup' && <Navigation />}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/wishlist' element={<WishList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App
