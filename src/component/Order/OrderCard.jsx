import React from 'react'
import './order-card.scss'

function OrderCard({ordered: {productName, productPrice, quantity}}) {
  return (
    <div className='ordered__card'>
        <h1 className='ordered__name'>{productName}</h1>
        <div className='ordered__details'>
            <p className='ordered__price'>{`Rp. ${productPrice}`}</p>
            <span className='ordered_quantity'>{`x${quantity}`}</span>
        </div>
    </div>
  )
}

export default OrderCard