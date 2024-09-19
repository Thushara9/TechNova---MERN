import React from 'react';
import './Brands.css';

const Brands = () => {
  const imageUrls = [
    'https://www.simplytek.lk/cdn/shop/files/apple-sri-lanka-simplytek_512x384_crop_center.jpg?v=1694592426',
    'https://www.simplytek.lk/cdn/shop/files/JBL-sri-lanka-simplytek_700x464_crop_center.webp?v=1694592426',
    'https://www.simplytek.lk/cdn/shop/files/haylou-logo_241adf82-18a0-431f-a622-6a77497830a8_800x465_crop_center.png?v=1696328799',
    'https://www.simplytek.lk/cdn/shop/files/samsung-sri-lanka-simplytek_1692x580_crop_center.webp?v=1694592426',
    'https://www.simplytek.lk/cdn/shop/files/xiaomi-sri-lanka-simplytek_540x420_crop_center.jpg?v=1694592426',
    'https://www.simplytek.lk/cdn/shop/files/bose-ar21_1200x600_crop_center.webp?v=1694592425',
    'https://www.simplytek.lk/cdn/shop/files/anker-sri-lanka-simplytek_640x128_crop_center.webp?v=1694592426',
    'https://static.vecteezy.com/system/resources/previews/020/927/085/original/lenovo-logo-brand-phone-symbol-red-design-china-mobile-illustration-free-vector.jpg',
    'https://logos-world.net/wp-content/uploads/2023/01/Skullcandy-Logo.png',
    'https://www.simplytek.lk/cdn/shop/files/Marshall_1200x308_crop_center.webp?v=1694592426',
  
  
  ];

  return (
    <>
 <div className="latest-title">
        <h2 className='re-title'>Our Brands</h2>
        <hr className='latest-hr'></hr>
      </div>
    <div className="card-grid">
      {imageUrls.map((url, index) => (
        <div className="card" key={index}>
          <img src={url} alt={`Card ${index + 1}`} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Brands;
