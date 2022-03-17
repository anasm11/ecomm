import React from 'react'
import '../css/Products.css'
import {productsData,IcRoundFavoriteBorder,IcRoundShare,IcSharpMoreVert} from '../assets/index'

const Products = () => {
    return (
        <div className='products-page'>

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
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
                        <div className='values'>
                        <span>0</span>
                        <span>100</span>
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
                        <li><input type='checkbox'/>Speakers</li>
                        <li><input type='checkbox'/>Phone cases</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className='list no-bullet-list'>
                    <div className='list-header'>
                        <h3>Rating</h3>
                    </div>
                    <ul>
                        <li><input type='radio'/>4 stars & above</li>
                        <li><input type='radio'/>3 stars & above</li>
                        <li><input type='radio'/>2 stars & above</li>
                        <li><input type='radio'/>1 stars & above</li>
                    </ul>
                </div>
            </li>
            <li>
                <div className='list no-bullet-list'>
                    <div className='list-header'>
                        <h3>Sort by</h3>
                    </div>
                    <ul>
                        <li><input type='radio'/>Price - Low to High</li>
                        <li><input type='radio'/>Price - Low to High</li>
                    </ul>
                </div>
            </li>
        </ul>
        </div>
    </aside>
            
            <main>
        <div className='main-header'>
            <div className='main-text'><h3>Showing All Products</h3></div>
            <div className='sub-text'><span>(Showing 20 products)</span></div>
        </div>

        <div className='main-body'>
        {productsData.map((product)=>
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
                <IcRoundFavoriteBorder/>
                <IcRoundShare/>
                <IcSharpMoreVert/>
            </div>
        </div>
    </div>
   
        
        )}
        </div>
       </main>
        </div>
    )
}

export default Products
