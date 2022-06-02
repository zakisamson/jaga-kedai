import React from 'react'
import { Link } from 'react-router-dom'
import './menu-header.scss'

function MenuHeader() {
  return (
    <div className='menu__header'>
        <h1 className="menu__header__title">Menu List</h1>
        <Link to='add' className='menu__header__button'>Add Product</Link>
    </div>
  )
}

export default MenuHeader