import React, { useEffect, useState } from 'react'
import './product-card.scss'

function ProductCard({product: {productName, productPrice, productImage}, handleAddOrder, handleSubtractOrder, rupiahFormat, orderedItem}) {
  const [displayIncrement, setDisplayIncrement] = useState(false);
  const [qty, setQty] = useState(0)
  const [ordered, setOrdered] = useState({
    productName: '',
    productPrice: '',
    quantity: 0
  })

  useEffect(() => {
    setOrdered(orderedItem.find(list => list.productName === productName));

    if(ordered) return setDisplayIncrement(true);
    return setDisplayIncrement(false)

  }, [ordered, orderedItem, productName])

  const handleAddButton = () => {
    handleAddOrder({productName, productPrice, quantity: 0})
    setQty(qty + 1)
  }

  const handleSubtractButton = () => {
    handleSubtractOrder({productName, productPrice, quantity: ordered.quantity})
    setQty(qty - 1)
  }



  return (
    <div className='product__card'>
        <img className='product__card__image' src={productImage} alt="" />
        <div className="product__card__details">
          <h2 className='product__card__details__name'>{productName}</h2>
          <div className="product__card__details__infos">
            <span className='product__card__details__infos__price'>{rupiahFormat(productPrice)}</span>
            { displayIncrement
              ? 
                <div className='product__card__details__infos__button__quantity'>
                  <button className='product__card__details__infos__button__quantity__decrement'onClick={() => handleSubtractButton()}>-</button>
                  <span className='product__card__details__infos__button__quantity__quantity'>{qty}</span>
                  <button 
                    className='product__card__details__infos__button__quantity__increment' 
                    onClick={() => handleAddButton()}
                  >
                    +
                  </button>
                </div>
              : <button 
                  className='product__card__details__infos__button' 
                  onClick={() => handleAddButton()}
                >
                  Add Item
                </button>
            }
          </div>
        </div>
    </div>
    )
}

export default ProductCard