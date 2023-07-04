import React from 'react';
import './App.css';
import Login from './Pages/login';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Product from './Pages/product';

import { Provider } from 'react-redux'
// import { store } from './reduxStore/store';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/users/*" element={<UserApp />} /> */}
        </Routes>
      </BrowserRouter>

  )
}

export default App;
