import React from 'react'
import List from './List'
import './menu-list.scss'

function MenuList({products, handleProducts}) {
  return (
    <div className='menu__list__container'>
        {products.map((product, index) => <List key={index} product={product} products={products} handleProducts={handleProducts}/>)}
    </div>
  )
}

export default MenuList