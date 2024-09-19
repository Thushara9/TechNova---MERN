import React from 'react';
import './BrandCarousel.css';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/apple.png';
import img2 from '../../assets/marshall.png';
import img3 from '../../assets/jbl.png';
import img4 from '../../assets/samsungt.png';
import img5 from '../../assets/skullcandy.png';
import img6 from '../../assets/anker.png';

const BrandCarousel = () => {
    return (
        <div className="app1">
           
            <Marquee speed={100} gradient={true} >
                <div className="brandImages">
                    <img className='clientImg' src={img1} alt="Apple" />
                    <img className='clientImg' src={img2} alt="Marshall" />
                   
                    <img className='clientImg' src={img3} alt="JBL" />
                    <img className='clientImg' src={img4} alt="Samsung" />
                  
                    <img className='clientImg' src={img5} alt="Skullcandy" />
                    <img className='clientImg' src={img6} alt="Anker" />
                    <img className='clientImg' src={img6} alt="Anker" />
                    
                </div>
            </Marquee>
        </div>
    );
};

export default BrandCarousel;
