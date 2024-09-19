import React from 'react'
import './Hero.css'
import { GoArrowRight } from 'react-icons/go'
import { Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
                 <h2>Say Hello to New JBL Charge 5</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p> */}
               <Link to={'/products'} ><button>Shop Now  <GoArrowRight className="aboutus-cta-icon" /> </button>  </Link> 
    
            </div>
          
        </div>
  )
}

export default Hero
