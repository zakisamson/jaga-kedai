import React, {useEffect, useState} from 'react'
import './dashboard.scss'
import SearchBar from '../SearchBar/SearchBar'
import Categories from '../Categories/Categories'
import Products from '../Products/Products' 
import Order from '../Order/Order'
import { products } from '../../products/dataDummy'

function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(products.map(product => product.productCategory))];
  const [orderedItem, setOrderedItem] = useState([]);
  const [totalPriceOrder, setTotalPriceOrder] = useState(0);

  const handleCategory = (string) => {
    setActiveCategory(string);
  }

  const handleAddOrder = (obj) => {
    const exist = orderedItem.find(item => item.productName === obj.productName);
    if(exist){
      setOrderedItem(orderedItem.map(item => 
        item.productName === obj.productName ? {...exist, quantity: exist.quantity + 1} : item
      ))
    } else {
      setOrderedItem([...orderedItem, {...obj, quantity: 1}]);
    }
  }

  useEffect(() => {
    if(orderedItem.length){
      const total = orderedItem.reduce((acc, item) => {
        return acc += (item.quantity * item.productPrice)
      }, 0)
      setTotalPriceOrder(total)
    }
  }, [totalPriceOrder, orderedItem])
  
  console.log(totalPriceOrder)

  return (
    <div className='dashboard-container'>
      <div className="col-1">
        <SearchBar />
        <Categories 
          handleCategory={handleCategory} 
          activeCategory={activeCategory}
          categories={categories}
        />
        <Products activeCategory={activeCategory} handleAddOrder={handleAddOrder}/>
      </div>
      <div className="col-2">
        <div className="order-container">
          <h1>Orders</h1>
          {orderedItem.length > 0 && <Order orderedItem={orderedItem}/>}
          {totalPriceOrder && <h1>{totalPriceOrder}</h1>}
        </div>
      </div>
    </div>
  )
}

export default Dashboard