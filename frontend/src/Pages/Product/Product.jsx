import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../Components/Context/StoreContext';
import ReactImageMagnify from 'react-image-magnify';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { product_list,addToCart,url } = useContext(StoreContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    const product = product_list.find((item) => item._id === productId);
    setProductData(product);
    console.log(product)
    if (product) {
      setImage(`${url}/images/${product.image}`);// Set the initial main image
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, product_list]);

  if (!productData) return <div>Loading...</div>;

  const handleThumbnailClick = (thumbnail) => {
    setImage(`${url}/images/${thumbnail}`);
  };

  return (
    <>
    <div className="product-container">
      <div className="product-image-container">
        <ReactImageMagnify 
          {...{
            smallImage: {alt: productData.name,isFluidWidth: true,src: image,
            },
            largeImage: {
              src: image,
              width: 600,
              height: 600,
            },
            enlargedImageContainerStyle: { zIndex: 1000 },
            shouldUsePositiveSpaceLens: true,
            enlargedImagePosition: 'over'
          }} 
          className="product-image"
        />
        <div className="product-thumbnails">
          <div className="thumbnail-box1">
            <img 
              src={`${url}/images/${productData.thumbnail1}`} 
              alt="Thumbnail 1" 
              onClick={() => handleThumbnailClick(productData.thumbnail1)} 
            />
          </div>
          <div className="thumbnail-box1">
            <img 
               src={`${url}/images/${productData.thumbnail2}`} 
              alt="Thumbnail 2" 
              onClick={() => handleThumbnailClick(productData.thumbnail2)} 
            />
          </div>
          <div className="thumbnail-box1">
            <img 
             src={`${url}/images/${productData.thumbnail3}`} 
              alt="Thumbnail 3" 
              onClick={() => handleThumbnailClick(productData.thumbnail3)} 
            />
          </div>
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-name">{productData.name}</h1>
        <p className="product-price">Rs.{productData.price.toFixed(2)}</p>
        <h3>Short Description</h3>
        <p className="product-description">{productData.description}</p>
        <button onClick={() => addToCart(productId)} className="add-to-cart-button">Add to Cart</button>
      <br /><br />
      </div>
    </div>
    {/* <hr></hr> */}
    <RelatedProducts category={productData.category}   />
    </>
  );
};

export default Product;
