import React from 'react'
import {products} from '../../products/dataDummy'
import ProductCard from './ProductCard'
import './products.scss'

function Products({activeCategory}) {
  
  return (
    <div className='products-container'>
      { activeCategory === 'All'
        ? products.map((product, index) => <ProductCard key={index} product={product}/>)
        : products
          .filter(filtered => filtered.productCategory === activeCategory)
          .map((product, index) => <ProductCard key={index} product={product}/>)
      }
    </div>
  )
}

export default Products