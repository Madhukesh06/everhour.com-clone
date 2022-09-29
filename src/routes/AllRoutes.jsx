import { Route, Routes } from "react-router-dom";
import Demo from "../components/Demo/Demo";
import Pricing from "../components/Pricing/Pricing";
import Signup from "../components/Signup/Signup";
import Landing from "./Landing/Landing";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Landing/>} />
         <Route path='/login' element={<h1>Login</h1>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/demo' element={<Demo />} />
         <Route path='/pricing' element={<Pricing/>} />
      </Routes>
   );
}

export default AllRoutes;