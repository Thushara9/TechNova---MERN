import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Brands from '../../Components/Brands/Brands'
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel'
import CatGrid from '../../Components/CatGrid/CatGrid'
import Testimonial from '../../Components/Testimonial/Testimonial'
import LatestProducts from '../../Components/LatestProducts/LatestProducts'



const Home = () => {
  return (
    <div>
      <Hero/>
      <InfoBox/>
      <CatGrid/>
      <BrandCarousel/>
      <LatestProducts/>
      <Brands/>
      <Testimonial/>
  
      
 
      
    </div>
  )
}

export default Home
