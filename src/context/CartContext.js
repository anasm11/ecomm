import { useState, useEffect, createContext, useContext } from "react"
import axios from "axios"
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(async () => {
    const res = await axios({
      method: 'GET',
      url: '/api/user/cart',
      headers: { authorization: localStorage.getItem('token') }
    })
    console.log(res, 'cartfrom cn')
    setCartItems(res.data.cart)
  }, [])

  const addToCart = async (product) => {
    console.log(product._id);
    const res = await axios({
      method: "post",
      url: "/api/user/cart",
      headers: { authorization: localStorage.getItem('token') },
      data: {
        product: product
      },
    });

    console.log(res.data.cart, 'added')
    setCartItems(res.data.cart)

  }

  const removeFromCart = async (product) => {
    const res = await axios({
      method: "delete",
      url: `/api/user/cart/${product._id}`,
      headers: {
        authorization: localStorage.getItem('token')
      }

    })
    console.log(res.data)
    setCartItems(res.data.cart)

  }


  const incrementCartItem = async (product) => {

    const res = await axios({
      method: "POST",
      url: `/api/user/cart/${product._id}`,
      headers: {
        authorization: localStorage.getItem('token')
      },
      data: {
        action: {
          type: "increment"
        }
      }

    })
    setCartItems(res.data.cart)
    console.log(res.data, 'p')
  }


  const decrementCartItem = async (product) => {
    const item = cartItems.find((item) => product._id === item._id)
    if (item.qty === 1) return removeFromCart(product)
    const res = await axios({
      method: 'post',
      url: `/api/user/cart/${product._id}`,
      headers: { authorization: localStorage.getItem('token') },
      data: {
        action: {
          type: 'decrement'
        }
      }
    })

    setCartItems(res.data.cart)
  }



  return (<CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementCartItem, decrementCartItem }}>{children}</CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export {
  CartProvider, useCart
}