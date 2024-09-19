import React, { useState, useContext } from 'react';
import './ProductItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import QuickView from '../QuickView/QuickView'; // Import the QuickView component
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, price, description, image, thumbnail1, thumbnail2, thumbnail3 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false); // State to manage QuickView visibility

  const { addToCart ,url} = useContext(StoreContext);

  

  return (
    <div 
      className='food-item'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt={name} />
        {isHovered && (
          <button className='view-btn' onClick={() => setIsQuickViewOpen(true)}>Quick view</button>
        )}
        <MdAddShoppingCart className='add' onClick={() => addToCart(id)}/>
      </div>
      <Link to={`/product/${id}`}>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-price">Rs.{price.toFixed(2)}</p>
      </div>
      </Link>
      {/* Render QuickView component conditionally and pass product details */}
      {isQuickViewOpen && (
        <QuickView 
        id={id}
          name={name} 
          price={price} 
          description={description} 
          image={image}
          thumbnail1={thumbnail1}
          thumbnail2={thumbnail2}
          thumbnail3={thumbnail3}
          onClose={() => setIsQuickViewOpen(false)} 
        />
      )}
    </div>
  );
}

export default ProductItem;
