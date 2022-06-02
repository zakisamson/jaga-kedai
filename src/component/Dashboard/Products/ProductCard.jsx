import React from 'react'
import './product-card.scss'

function ProductCard({product: {productName, productPrice, productImage}, handleAddOrder, rupiahFormat}) {

  return (
    <div 
      className='product-card'
      onClick={() => {
        handleAddOrder({
          productName: productName,
          productPrice: productPrice,
          quantity: 0
        })
      }}>
        <img className='card__image' src={productImage} alt="" />
        <div className="card__details">
          <h2 className='card__name'>{productName}</h2>
          <span className='card__price'>{rupiahFormat(productPrice)}</span>
        </div>
    </div>
  )
}

export default ProductCard