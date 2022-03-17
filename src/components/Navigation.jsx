import React from 'react'
import {Link} from "react-router-dom"
import {IcRoundAccountCircle} from '../assets/index'


const Navigation = () => {
    return (
            <header className="nav">
          <h2>xsreShop</h2>
          <ul className="nav-links-container">
            <li className="link"><Link to='./'>Home</Link></li>
            <li className="link"><Link to='./products'>Products</Link></li>
            <li className="link"><Link to='./wishlist' >Wishlist</Link></li>
            <li className="link"><Link to='./cart'>Cart</Link></li>
            <li className="link"><Link to='./login'>Login</Link></li>
            <li className="link"><Link to='./signup'>Signup</Link></li>
            <li className="link">
                <span className="material-icons">
                  <IcRoundAccountCircle/>
                  </span>
              </li>
          </ul>
        </header>
    )
}

export default Navigation
