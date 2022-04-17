import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'
import {bannerData} from '../assets/index'
import {useProductsContext} from "../context/ProductsContext"
import '../css/Home.css'

const Home = () => {
const [categoriesData,setCategoriesData]=useState([])

const navigate=useNavigate()
const {dispatch:productsDispatch} =useProductsContext()

  useEffect(()=>{
    (async()=>{
      const res=await axios({
        method:'get',
        url:'/api/categories'
      })
      setCategoriesData(res.data.categories)
    })()
  },[])

    return (
        <div className='page-body'>
          <div className='category-container'>
            {categoriesData.map((category)=>{

           return  <div className='category' key={category._id}>
              <img src={category?.image} alt={category.description} onClick={()=>{
                productsDispatch({ type: 'categorySelect', payload: category.categoryName })
                navigate('/products')
                }}/>
            </div>
             }
            )}
          </div>

          
          <div className="card sale-section" onClick={()=>navigate('/products')}>
            <div className="card-body">
              
                <div className="img-text">
                <img src={bannerData.img.source} alt={bannerData.img.alt}/>
                <div className='text-container'>
                    <div className="title-text"><h1>Clearance sale 20-30% off.</h1></div>
                    <div className="author-text"><h2>Fresh Arrivals</h2></div>
                    <div className="author-text"><h2>Starting from ₹399</h2></div>
                    <div className="author-text"><h2>Buy Now</h2></div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className='collection-1' onClick={()=>{
            productsDispatch({ type: 'categorySelect', payload: categoriesData[2].categoryName })
            navigate('/products')
          }}>
            <img src={categoriesData[2]?.image} alt="collection1-photo"/>
            <div className='collection-1-text'>
              <h2>Collection 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
              </p>
            </div>
          </div>

          <div className='collection-2' onClick={()=>{
            productsDispatch({ type: 'categorySelect', payload: categoriesData[3].categoryName })
            navigate('/products')
          }}>
            <img src={categoriesData[3]?.image} alt="collection2-photo"/>
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