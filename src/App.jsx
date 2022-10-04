import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {

  return (
    <div className="App">
      <AllRoutes />
    </div>
  )
}

export default App;