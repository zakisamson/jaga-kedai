import React from 'react'
import './dashboard.scss'
import SearchBar from '../SearchBar/SearchBar'
import Categories from '../Categories/Categories'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className="col-1">
        <SearchBar />
        <Categories />
        <div className="products-container">Product Card Goes Here</div>
      </div>
      <div className="col-2">
        <div className="order-container">
          <h1>Orders</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard