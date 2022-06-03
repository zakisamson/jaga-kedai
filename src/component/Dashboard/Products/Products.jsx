import React from 'react'
import ProductCard from './ProductCard'
import './products.scss'

function Products({activeCategory, handleAddOrder, handleSubtractOrder, searchInput, rupiahFormat, products, orderedItem}) {
  const displayedProducts = activeCategory !== 'All' ? products.filter(product => product.productCategory === activeCategory) : products
  const searchDisplayedProducts = displayedProducts.filter(item => item.productName.toLowerCase().includes(searchInput.toLowerCase()))
  
  return (
    <div className='products-container'>
      { searchInput
        ? searchDisplayedProducts.map((product,index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder} orderedItem={orderedItem} rupiahFormat={rupiahFormat} handleSubtractOrder={handleSubtractOrder}/>)
        : displayedProducts.map((product, index) => <ProductCard key={index} product={product} handleAddOrder={handleAddOrder} orderedItem={orderedItem} rupiahFormat={rupiahFormat} handleSubtractOrder={handleSubtractOrder}/>)
      }
    </div>
  )
}

export default Products