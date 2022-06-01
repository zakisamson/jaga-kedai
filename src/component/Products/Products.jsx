import React from 'react'
import {products} from '../../products/dataDummy'
import ProductCard from './ProductCard'
import './products.scss'

function Products({activeCategory, handleAddOrder}) {
  
  return (
    <div className='products-container'>
      { activeCategory === 'All'
        ? products.map((product, index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder}/>)
        : products
          .filter(filtered => filtered.productCategory === activeCategory)
          .map((product, index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder}/>)
      }
    </div>
  )
}

export default Products