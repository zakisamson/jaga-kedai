import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import MenuList from './MenuList/MenuList'
import MenuHeader from './MenuHeader/MenuHeader'
import './menu.scss'

function Menu({products, handleProducts}) {

  return (
    <div className='menu-container'>
        <div className="col-1">
            <SearchBar />
            <MenuHeader />
            <MenuList products={products} handleProducts={handleProducts}/>
        </div>
        <div className="col-2">
        </div>
    </div>
  )
}

export default Menu