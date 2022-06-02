import React from 'react'
import './order.scss'
import OrderCard from './OrderCard'
import TotalPrice from './TotalPrice'

function Order({orderedItem, totalPriceOrder, rupiahFormat}) { 
  return (
    <div className='ordered__container'>
      <div className="ordered__list">
        {orderedItem.map((item, index) => <OrderCard key={index} ordered={item} rupiahFormat={rupiahFormat}/>)}
      </div>
      <div className="ordered__total">
        {totalPriceOrder && <TotalPrice totalPriceOrder={totalPriceOrder}/>}
        <button>Selesaikan Pesanan</button>
      </div>
    </div>
  )
}

export default Order