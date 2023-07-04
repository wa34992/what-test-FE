import React from 'react';
import './App.css';
import Login from './Pages/login';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// import { Provider } from 'react-redux'

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
  

  )
}

export default App;
