import React, { useContext, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { MdOutlineClose } from 'react-icons/md';
import './QuickView.css';
import { StoreContext } from '../Context/StoreContext';

const QuickView = ({ id, name, price, description, image, thumbnail1, thumbnail2, thumbnail3, onClose }) => {
  const { addToCart, url } = useContext(StoreContext);
  const [mainImage, setMainImage] = useState(`${url}/images/${image}`);

  const handleThumbnailClick = (thumbnail) => {
    setMainImage(`${url}/images/${thumbnail}`);
  };

  return (
    <div className="quick-view-popup">
      <div className="quick-view-content">
        <MdOutlineClose className="close1" onClick={onClose} />
        
        <div className="quick-view-image-container">
          <ReactImageMagnify 
            {...{
              smallImage: {
                alt: name,
                isFluidWidth: true,
                src: mainImage,
              },
              largeImage: {
                src: mainImage,
                width: 500,
                height: 500,
              },
              enlargedImageContainerStyle: { zIndex: 1000 },
              shouldUsePositiveSpaceLens: true,
              enlargedImagePosition: 'over',
            }} 
            className="quick-view-image"
          />

          <div className="quick-view-thumbnails">
            <div className="thumbnail-box">
              <img 
                src={`${url}/images/${thumbnail1}`} 
                alt="Thumbnail 1" 
                className="thumbnail-image" 
                onClick={() => handleThumbnailClick(thumbnail1)} 
              />
            </div>
            <div className="thumbnail-box">
              <img 
                src={`${url}/images/${thumbnail2}`} 
                alt="Thumbnail 2" 
                className="thumbnail-image" 
                onClick={() => handleThumbnailClick(thumbnail2)} 
              />
            </div>
            <div className="thumbnail-box">
              <img 
                src={`${url}/images/${thumbnail3}`} 
                alt="Thumbnail 3" 
                className="thumbnail-image" 
                onClick={() => handleThumbnailClick(thumbnail3)} 
              />
            </div>
          </div>
        </div>
        
        <div className="quick-view-details">
          <h2 className="quick-view-name">{name}</h2>
          <p className="quick-view-price">Rs.{price.toFixed(2)}</p>
          <h3>Short Description</h3>
          <p className="quick-view-description">{description}</p>
          <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
