import React from 'react'
import {products} from '../../products/dataDummy'
import ProductCard from './ProductCard'
import './products.scss'

function Products({activeCategory, handleAddOrder, searchInput}) {
  const displayedProducts = activeCategory !== 'All' ? products.filter(product => product.productCategory === activeCategory) : products
  const searchDisplayedProducts = displayedProducts.filter(item => item.productName.toLowerCase().includes(searchInput.toLowerCase()))
  
  return (
    <div className='products-container'>
      { searchInput
        ? searchDisplayedProducts.map((product,index) => <ProductCard key={index} product={product}/>)
        : displayedProducts.map((product, index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder}/>)
      }
    </div>
  )
}

export default Products