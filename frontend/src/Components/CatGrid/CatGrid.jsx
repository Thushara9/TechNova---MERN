import React from 'react';
import { motion } from 'framer-motion';
import './CatGrid.css';
import item_1 from '../../assets/Headphone.png';
import item_2 from '../../assets/camera.png';
import item_3 from '../../assets/speaker.png';
import item_4 from '../../assets/smartWatch.png';
import item_5 from '../../assets/powerBank.png';
import item_6 from '../../assets/projector.png';

const CatGrid = () => {
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="small-box box-color-1">
          <div className='box-content'>
            <h3>HeadPhones</h3>
            <button>Buy Now</button>
            <motion.img 
              src={item_1} 
              alt="Headphones" 
              variants={imageVariants} 
              whileHover="hover" 
              whileTap="tap" 
            />
          </div>
        </div>
        <div className="small-box box-color-2">
          <div className='box-content'>
            <h3>Speakers</h3>
            <button>Buy Now</button>
            <motion.img 
              src={item_3} 
              alt="Speakers" 
              variants={imageVariants} 
              whileHover="hover" 
              whileTap="tap" 
            />
          </div>
        </div>
        <div className="long-box box-color-3">
          <div className='box-content'>
            <h3>Security Cameras</h3>
            <button>Buy Now</button>
            <motion.img 
              src={item_2} 
              alt="Security Cameras" 
              variants={imageVariants} 
              whileHover="hover" 
              whileTap="tap" 
            />
          </div>
        </div>
      </div>
      <div className="grid-row">
        <div className="long-box box-color-4">
          <div className='box-content'>
            <h3>Smart Watches</h3>
            <button>Buy Now</button>
            <motion.img 
              src={item_4} 
              alt="Smart Watches" 
              variants={imageVariants} 
              whileHover="hover" 
              whileTap="tap" 
            />
          </div>
        </div>
        <div className="small-box box-color-5">
          <div className='box-content'>
            <h3>Power Banks</h3>
            <button>Buy Now</button>
            <motion.img 
              src={item_5} 
              alt="Power Banks" 
              variants={imageVariants} 
              whileHover="hover" 
              whileTap="tap" 
            />
          </div>
        </div>
        <div className="small-box box-color-6">
          <div className='box-content'>
            <h3>Projectors</h3>
            <button>Buy Now</button>
            <motion.img 
              src={item_6} 
              alt="Projectors" 
              variants={imageVariants} 
              whileHover="hover" 
              whileTap="tap" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatGrid;

