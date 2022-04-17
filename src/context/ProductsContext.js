import { createContext, useContext, useState, useEffect,useReducer } from "react"
import axios from "axios"

const ProductsContext = createContext()

const ProductsProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(async () => {
        const { data } = await axios.get('/api/products')
        setAllProducts(data.products)
    }, [])

    useEffect(async () => {
        dispatch({ ...state, products: allProducts })
    }, [allProducts])


    const filterItems=(productsState,allProducts)=>{
        console.log(productsState.filterPrice,'fromfilter')
        var prodcts = allProducts.filter((prdct) => {
            for (let i in productsState.categoryFilter) {
                if (prdct.categoryName === productsState.categoryFilter[i])
                    return true
            }
            return false
        })
    
         let x=prodcts.filter((item)=>parseInt(item.rating)>=parseInt(productsState.filterRating))
    
         let y=[...x].filter((item)=>{
             console.log(item,productsState.filterPrice,'ppp')
            return parseInt(item.price)<=parseInt(productsState.filterPrice)
            })
    
        return y
    }


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

                var prodcts = filterItems({ ...state, categoryFilter: x }, allProducts)
                return { ...state, products: prodcts, categoryFilter: x }
            }

            case ('categorySelect'): {
                const x=[action.payload]
                var prodcts = filterItems({ ...state, categoryFilter: x }, allProducts)
                return { ...state, products: prodcts, categoryFilter: x }
            }

            case ('filterRating'): {
                var prodcts = filterItems({ ...state, filterRating: action.payload }, allProducts)

                return { ...state, filterRating: action.payload, products: prodcts }
            }

            case ('filterPrice'): {
                console.log(action.payload, 'payload val')
                var prdcts = filterItems({ ...state, filterPrice: action.payload }, allProducts)

                return { ...state, filterPrice: action.payload, products: prdcts }
            }

            case ('priceSortDrn'): {
                let y = state.products
                if (parseInt(action.payload) === 0) { console.log('yes'); y.sort((a, b) => parseInt(a.price) - parseInt(b.price)) }
                else if (action.payload === 1)
                    y.sort((a, b) => parseInt(b.price) - parseInt(a.price))
                return { ...state, products: y, priceSortDrn: action.payload }
            }

            case('clear'):{
                return {...state,filterRating: 0, priceSortDrn: null,products:allProducts,categoryFilter:['wireless earphones', 'headphones', 'phone cases', 'speakers'],filterPrice: Number.MAX_SAFE_INTEGER,}
            }
        }


        return { ...state, products: allProducts }
    }

    const [state, dispatch] = useReducer(reducer, { filterRating: 0, priceSortDrn: null, products: allProducts, categoryFilter: ['wireless earphones', 'headphones', 'phone cases', 'speakers'], filterPrice: Number.MAX_SAFE_INTEGER })



    return <ProductsContext.Provider value={{ state, dispatch }}>{children}</ProductsContext.Provider>
}

const useProductsContext = () => useContext(ProductsContext)

export { ProductsProvider, useProductsContext }