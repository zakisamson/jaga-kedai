import './App.scss';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './component/SideBar/SideBar';
import Dashboard from './component/Dashboard/Dashboard';
import Menu from './component/Menu/Menu';
import { productsDummy } from './products/dataDummy';
import { accountsDummy } from './Accounts';
import AddMenu from './component/Menu/AddMenu/AddMenu';
import EditMenu from './component/Menu/EditMenu/EditMenu';
import Login from './component/Login/Login';
import Register from './component/Login/Register';

function App() {
  const [displayNavBar, setDisplayNavBar] = useState('false');
  const [products, setProducts] = useState(productsDummy)
  const [account, setAccount] = useState(accountsDummy)

  const handleDisplayNav = () => {
    setDisplayNavBar(!displayNavBar)
  }

  const handleLogin = (obj) => {
    setAccount(obj)
    localStorage.setItem('account', JSON.stringify(account))
    console.log("added to local storage")
  }

  const handleProduct = (obj) => {
    setProducts(obj)
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login account={account} handleLogin={handleLogin}/>}></Route>
        <Route path="/register" element={<Register account={account} />}></Route>
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