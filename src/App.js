import './App.css';
import React, {useState, useEffect} from 'react';
import OrderInfo from './OrderInfo';
import ChecksInfo from './ChecksInfo';
import Menu from './Menu';
import {BrowserRouter as Router, Routes, Route}
from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>

          <Route path='/register-order'element={ <OrderInfo />} />
          <Route path='/get-checks' element={<ChecksInfo />} />
          <Route path='/menu' element={<Menu />}/>
                  
        </Routes>

      </div>
    </Router>
  );
}

export default App;