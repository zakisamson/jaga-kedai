import React from 'react'
import './product-card.scss'

function ProductCard({product: {productName, productCategory, productPrice, productImage}}) {
  return (
    <div className='product-card'>
        <img className='card__image' src={productImage} alt="" />
        <div className="card__details">
          <div className="card__header">
            <h2 className='card__name'>{productName}</h2>
            <p className="card__category">{productCategory}</p>
          </div>
          <span className='card__price'>{`Rp. ${productPrice}`}</span>
        </div>
    </div>
  )
}

export default ProductCard