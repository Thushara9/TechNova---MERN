import React, { useState } from 'react'
import ExploreCategory from '../../Components/ExploreCategory/ExploreCategory'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';

const Products = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
      <ExploreCategory category={category} setCategory={setCategory}/>
      <div>


      <ProductDisplay category={category}  />
      </div>
    </div>
  )
}

export default Products
