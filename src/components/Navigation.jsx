import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {IcRoundAccountCircle} from '../assets/index'


const Navigation = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
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
            <li><IcRoundAccountCircle onClick={() => setShowProfileDropdown((prev) => !prev)} />
          {showProfileDropdown &&
            <div className='profile-dropdown'>
              {localStorage.getItem('token') ? <div>My Profile<hr/></div> : <div><Link to='/login' >Login</Link><hr/></div>}
              <div onClick={()=>{
                localStorage.setItem('token','')
              }}>Logout</div>
            </div>}</li>
          </ul>
        </header>
    )
}

export default Navigation
