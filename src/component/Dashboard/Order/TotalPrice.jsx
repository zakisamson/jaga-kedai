import React from 'react'
import './total-price.scss'

function TotalPrice({totalPriceOrder}) {

    return (
        <div className='total-price__container'>
            <h1 className='total__header'>Total</h1>
            <span className='total__display'>{totalPriceOrder}</span>
        </div>
    )
}

export default TotalPrice