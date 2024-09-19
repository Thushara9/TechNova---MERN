import React, { useContext, useEffect, useState } from 'react'
import './LatestProducts.css'
import { StoreContext } from '../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem';

const LatestProducts = () => {

    const { product_list } = useContext(StoreContext);
    const [latestProducts, setLatestProducts] = useState([]);
    // console.log(food_list);

    useEffect(() => {
        setLatestProducts(product_list.slice(0, 10));
    }, [])

    return (
<>
        <div className="latest-title">
        <h2 className='re-title'> Latest Products</h2>
        <hr className='latest-hr'></hr>
      </div>
        <div className='product-latest-display'>
            <div className='product-latest-list'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image}  description={item.description}  price={item.price} name={item.name} thumbnail1={item.thumbnail1} thumbnail2={item.thumbnail2} thumbnail3={item.thumbnail3} />
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default LatestProducts
