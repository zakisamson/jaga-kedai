import React, {useEffect, useState} from 'react'
import './dashboard.scss'
import SearchBar from '../SearchBar/SearchBar'
import Categories from './Categories/Categories'
import Products from './Products/Products' 
import Order from './Order/Order'

function Dashboard({products}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [orderedItem, setOrderedItem] = useState([]);
  const [totalPriceOrder, setTotalPriceOrder] = useState(0);
  const [searchInput, setSearchInput] = useState('')

  const rupiahFormat = (price) => {
    return new Intl.NumberFormat('id-RP', {
      style: 'currency',
      currency: 'IDR'
    })
    .format(price)
  }

  const handleSearch = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

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

  const handleSubtractOrder = (obj) => {
    if(orderedItem.length > 0){
      const ordered = orderedItem.find(item => item.productName === obj.productName);

      if(ordered.quantity > 1){
        setOrderedItem(orderedItem.map(item => 
          item.productName === obj.productName ? {...ordered, quantity: ordered.quantity - 1} : item
        ))
      } else {
        setOrderedItem(orderedItem.filter(item => item.productName !== obj.productName))
      }
      console.log(ordered.quantity)
    }
  }

  console.log(orderedItem)

  useEffect(() => {
    if(orderedItem.length){
      const total = orderedItem.reduce((acc, item) => {
        return acc += (item.quantity * item.productPrice)
      }, 0)
      setTotalPriceOrder(rupiahFormat(total))
    }
  }, [totalPriceOrder, orderedItem])

  return (
    <div className='dashboard-container'>
      <div className="col-1">
        <SearchBar handleSearch={handleSearch}/>
        <Categories 
          handleCategory={handleCategory} 
          activeCategory={activeCategory}
          products={products}
        />
        <Products 
          products={products} 
          activeCategory={activeCategory}
          handleAddOrder={handleAddOrder}
          handleSubtractOrder={handleSubtractOrder}
          searchInput={searchInput} 
          orderedItem={orderedItem}
          rupiahFormat={rupiahFormat}/>
      </div>
      <div className="col-2">
        <h1 className='col-2__header'>Orders</h1>
        {orderedItem.length > 0 && <Order orderedItem={orderedItem} totalPriceOrder={totalPriceOrder} rupiahFormat={rupiahFormat}/>}
      </div>
    </div>
  )
}

export default Dashboard