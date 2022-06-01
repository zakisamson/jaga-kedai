import React from 'react'
import './product-card.scss'

function ProductCard({product: {productName, productCategory, productPrice, productImage}}) {
  return (
    <div className='product-card'>
        <img className='card__iamge' src={productImage} alt="" />
        <h2 className='card__name'>{productName}</h2>
        <p className="card__category">{productCategory}</p>
        <span className='card__price'>{`Rp. ${productPrice}`}</span>
    </div>
  )
}

export default ProductCard