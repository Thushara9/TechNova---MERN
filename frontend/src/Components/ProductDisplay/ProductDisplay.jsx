import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { StoreContext } from '../Context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';
import SearchBar from '../SearchBar/SearchBar';

const ProductDisplay = ({ category }) => {
    const { product_list } = useContext(StoreContext);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter the food_list based on category and search query
    const filteredList = product_list.filter(item => {
        const matchesCategory = category === "All" || category === item.category;
        const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
    });

    return (
        <div className='product-display' id='display'>
            <SearchBar onSearch={setSearchQuery} /> {/* SearchBar component */}
           
            <div className="product-display-list">
                {filteredList.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} 
                        thumbnail1={item.thumbnail1}
                        thumbnail2={item.thumbnail2}
                        thumbnail3={item.thumbnail3}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductDisplay;
