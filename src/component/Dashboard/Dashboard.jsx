import React, {useState} from 'react'
import './dashboard.scss'
import SearchBar from '../SearchBar/SearchBar'
import Categories from '../Categories/Categories'
import Products from '../Products/Products' 
import { products } from '../../products/dataDummy'

function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(products.map(product => product.productCategory))];

  const handleCategory = (string) => {
    setActiveCategory(string);
  }

  return (
    <div className='dashboard-container'>
      <div className="col-1">
        <SearchBar />
        <Categories 
          handleCategory={handleCategory} 
          activeCategory={activeCategory}
          categories={categories}
        />
        <Products activeCategory={activeCategory}/>
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