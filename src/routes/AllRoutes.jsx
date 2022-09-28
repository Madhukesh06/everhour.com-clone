import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<h1>Home page</h1>} />
         <Route path='/login' element={<h1>Log in</h1>} />
         <Route path='/signup' element={<h1>Signup</h1>} />
         <Route path='/demo' element={<h1>Demo</h1>} />
         <Route path='/pricing' element={<h1>Pricing</h1>} />
      </Routes>
   );
}

export default AllRoutes;