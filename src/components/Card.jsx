import { IcRoundFavorite, IcRoundFavoriteBorder, IcRoundShare, IcSharpMoreVert } from '../assets/index'




const Card = ({details}) => {
    const { product, incrementCartItem, decrementCartItem, addToCart, removeFromWishList, addToWishList, cartItems, wishList } = details

    return (
        <div className="card product-card" key={product._id}>
            <div className="card-body">
                <img src={product.image} onClick={()=>{
                    console.log(product.image)
                }}/>
                <div className="text-container">
                    <div className="title-text">{product.title}</div>
                    <div className="author-text">{product.author}</div>
                    <div className="author-text">₹ {product.price}</div>
                    <div className="author-text">{product.categoryName}</div>
                </div>
            </div>

            <div className="foot">
                <div className="action-buttons">
                    {cartItems.find((item) => item._id === product._id) ? <>
                        <button className='btn secondary-btn' onClick={() => {
                            incrementCartItem(product)
                        }

                        }>+</button>
                        <span>{cartItems.reduce((ans, item) => {


                            return item._id === product._id ? item.qty : ans

                        }, 0)}</span>
                        <button className='btn secondary-btn' onClick={() => { decrementCartItem(product) }}>-</button></> : <button className='btn primary-btn' onClick={() => { addToCart(product) }}>Add to cart</button>
                    }
                </div>
                <div className="action-icons">
                    {wishList.find((item) =>
                        item._id === product._id) ? <IcRoundFavorite onClick={() => removeFromWishList(product)} /> : <IcRoundFavoriteBorder onClick={() => {

                            addToWishList(product)
                        }} />

                    }

                    {/* <IcRoundShare />
                    <IcSharpMoreVert /> */}
                </div>
            </div>
        </div>
    )
}

export default Card;