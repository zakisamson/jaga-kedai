import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './container/Dashboard/Dashboard';
import Menu from './container/Menu/Menu';
import Merchant from './container/Merchant/Menu';
import Reports from './container/Reports/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/merchant' element={<Merchant />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;