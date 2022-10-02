import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {

  const [state, setState] = useState(null) 
  const token = useSelector((store) => store.auth.token) || localStorage.getItem("token")

  // let token = localStorage.getItem("token")
  useEffect(() => {
    setState(token) 
  }, [token])


  return (
    <div className="App">
      {!state && <Navbar />}
      <AllRoutes />
      {!state && <Footer />}
    </div>
  )
}

export default App;