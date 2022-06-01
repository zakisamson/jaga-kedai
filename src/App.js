import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import NavBar from './component/NavBar.jsx/NavBar';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  const [displayNavBar, setDisplayNavBar] = useState('false');

  const handleDisplayNav = () => {
    setDisplayNavBar(!displayNavBar)
  }

  return (
    <Router>
      <Routes>
        <Route path='/user' element={<NavBar displayNavBar={displayNavBar} handleDisplayNav={handleDisplayNav}/>}>
          <Route path='dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;