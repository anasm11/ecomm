import React from 'react'
import {bannerData,categoriesData} from '../assets/index'
import '../css/Home.css'

const Home = () => {
    return (
        <div className='page-body'>
          <div className='category-container'>
            {categoriesData.map((category)=>{

           return  <div className='category'>
              <img src={category.img.source} alt={category.img.alt}/>
            </div>
             }
            )}
          </div>

          <div className='sale-section'>
            <img src={bannerData.img.source} alt={bannerData.img.alt}/>
            <div className='sale-section-text'>
              <h1>Clearance sale 20-30% off.</h1>
              <h2>Fresh Arrivals</h2>
              <h2>Starting from ₹399</h2>
              <h2>Buy Now</h2>
            </div>
          </div>

          <div className='collection-1'>
            <img src={categoriesData[2].img.source} alt="collection1-photo"/>
            <div className='collection-1-text'>
              <h2>Collection 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
              </p>
            </div>
          </div>

          <div className='collection-2'>
            <img src={categoriesData[3].img.source} alt="collection2-photo"/>
            <div className='collection-2-text'>
              <h2>Collection 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
              </p>
            </div>
          </div>
        </div>
    
       
    )
}

export default Home















