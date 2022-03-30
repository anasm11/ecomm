import { IcRoundFavorite, IcRoundFavoriteBorder, IcRoundShare, IcSharpMoreVert } from '../assets/index'




const Card = (props) => {
    const { product } = props.details

    return (
        <div className="card">
            <div className="card-body">
                <div className="figure-with-badge">
                    <img src={product.img.source} alt={product.img.alt} />
                </div>
                <div className="text-container">
                    <div className="title-text">Speaker</div>
                    <div className="author-text">bluetooth</div>
                </div>
            </div>

            <div className="foot">
                <div className="action-buttons">
                    <button className='btn primary-btn'>Add to cart</button>
                </div>
                <div className="action-icons">
                    <IcRoundFavoriteBorder />
                    <IcRoundShare />
                    <IcSharpMoreVert />
                </div>
            </div>
        </div>)
}

export default Card;