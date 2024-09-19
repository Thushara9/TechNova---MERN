import React, { useContext, useEffect, useState } from 'react';
import './RelatedProducts.css';
import { StoreContext } from '../Context/StoreContext';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";

const RelatedProducts = ({ category }) => {
  const { product_list, addToCart,url } = useContext(StoreContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product_list.length > 0) {
      let productCopy = product_list.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      setRelated(productCopy.slice(0, 5));
    }
  }, [product_list, category]);

  return (
    <>
        <div className="latest-title">
        <h2 className='re-title'> Related Products</h2>
        <hr className='latest-hr'></hr>
      </div>
      <div className="main">
        <div className='related-products'>
          {related.map((item) => (
            <div className='product-item' key={item.id}>
              <div className='product-item-img-container'>
                <img className='product-item-image' src={url+"/images/"+item.image} alt={item.name} /> 
                <button className='view1-btn'>Quick view</button>
                {/* Add onClick handler to add item to cart */}
                <MdAddShoppingCart 
                  className='add' 
                  onClick={() => addToCart(item._id)}  // Add this line
                />
              </div>
              <Link to={`/product/${item._id}`}>
                <div className="product-item-info">
                  <div className="product-item-name-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                  </div>
                  <p className="product-item-price">Rs.{item.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
