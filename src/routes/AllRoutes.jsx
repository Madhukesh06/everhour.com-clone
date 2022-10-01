import { Route, Routes } from "react-router-dom";
import TabsSidebar from "../components/Dashboard/TabsSidebar/TabsSidebar";
import Demo from "../components/Demo/Demo";
import Login from "../components/Login/Login";
import Pricing from "../components/Pricing/Pricing";
import Signup from "../components/Signup/Signup";
import RequireAuth from "../hoc/RequireAuth";
import Landing from "./Landing/Landing";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<Landing/>} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/demo' element={<Demo />} />
         <Route path='/pricing' element={<Pricing/>} />
         <Route path='/dashboard' element={
            <RequireAuth>
               <TabsSidebar />
            </RequireAuth>
         } />
      </Routes>
   );
}

export default AllRoutes;