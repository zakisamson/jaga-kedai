import React from 'react'
import {products} from '../../products/dataDummy'
import ProductCard from './ProductCard'

function Products({activeCategory}) {
  
  return (
    <div className='products-container'>
      { activeCategory === 'All'
        ? products.map((product, index) => <ProductCard key={index} product={product}/>)
        : products
          .filter(category => category.productCategory === activeCategory)
          .map((product, index) => <ProductCard key={index} product={product}/>)
      }
    </div>
  )
}

export default Products