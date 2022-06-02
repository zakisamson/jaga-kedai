import React from 'react'
import ProductCard from './ProductCard'
import './products.scss'

function Products({activeCategory, handleAddOrder, searchInput, rupiahFormat, products}) {
  const displayedProducts = activeCategory !== 'All' ? products.filter(product => product.productCategory === activeCategory) : products
  const searchDisplayedProducts = displayedProducts.filter(item => item.productName.toLowerCase().includes(searchInput.toLowerCase()))
  
  return (
    <div className='products-container'>
      { searchInput
        ? searchDisplayedProducts.map((product,index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder} rupiahFormat={rupiahFormat}/>)
        : displayedProducts.map((product, index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder} rupiahFormat={rupiahFormat}/>)
      }
    </div>
  )
}

export default Products