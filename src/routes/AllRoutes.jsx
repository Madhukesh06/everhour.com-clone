import { Route, Routes } from "react-router-dom";
import Demo from "../components/Demo/Demo";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<h1>Home page</h1>} />
         <Route path='/login' element={<h1>Log in</h1>} />
         <Route path='/signup' element={<h1>Signup</h1>} />
         <Route path='/demo' element={<Demo />} />
         <Route path='/pricing' element={<h1>Pricing</h1>} />
      </Routes>
   );
}

export default AllRoutes;