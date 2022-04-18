import axios from "axios"
import { useContext, useState, createContext } from "react"

const WishListContext = createContext()

const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])

    const addToWishList = async (product) => {
        const res = await axios({
            method: 'post',
            url: '/api/user/wishlist',
            headers: {
                authorization: localStorage.getItem('token')
            },
            data: { product }
        })
        setWishList(res.data.wishlist)
    }

    const removeFromWishList = async (product) => {
        const res = await axios({
            method: 'DELETE',
            url: `/api/user/wishlist/${product._id}`,
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        setWishList(res.data.wishlist)
    }

    return (
        <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>{children}</WishListContext.Provider>
    )
}

const useWishListContext = () => useContext(WishListContext)

export { WishListProvider, useWishListContext }