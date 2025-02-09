import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Bas_de_page from './components/Bas_de_page'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/reports' element={<Reports/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
      <div class="bas_de_page"><Bas_de_page /></div>
    </Router>
    </>
  );
}

export default App;
