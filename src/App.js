import './App.scss';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './component/SideBar/SideBar';
import Dashboard from './component/Dashboard/Dashboard';
import Menu from './component/Menu/Menu';
import { productsDummy } from './products/dataDummy';
import AddMenu from './component/Menu/AddMenu/AddMenu';
import EditMenu from './component/Menu/EditMenu/EditMenu';

function App() {
  const [displayNavBar, setDisplayNavBar] = useState('false');
  const [products, setProducts] = useState(productsDummy)

  const handleDisplayNav = () => {
    setDisplayNavBar(!displayNavBar)
  }

  const handleProduct = (obj) => {
    setProducts(obj)
  }

  console.log(products)
  return (
    <Router>
      <Routes>
        <Route path='/user' element={<SideBar displayNavBar={displayNavBar} handleDisplayNav={handleDisplayNav}/>}>
          <Route path='dashboard' element={<Dashboard products={products}/>}/>
          <Route path='menu' element={<Menu products={products} handleProducts={handleProduct}/>}/>
          <Route path='menu/add' element={<AddMenu handleProduct={handleProduct} products={products}/>}/>
          <Route path='menu/edit/:id' element={<EditMenu handleProduct={handleProduct} products={products}/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;