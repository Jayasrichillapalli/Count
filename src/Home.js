import React from 'react'
import Header from './Header'
import Products from './Products'
import Footer from './Footer'
import './index.css'

function Home() {
  return (
    <div>
        <Header/>

        <div>
            <img src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg" className='image-style'/>
        </div>
        <div>
            <Products />
        </div>
        <div>
            <Footer/>
        </div>
        
    </div>
  )
}

export default Home