import { Route, Routes } from "react-router-dom";
import TabsSidebar from "../components/Dashboard/TabsSidebar/TabsSidebar";
import Demo from "../components/Demo/Demo";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Signup from "../components/Signup/Signup";
import RequireAuth from "../hoc/RequireAuth";
import Landing from "./Landing/Landing";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={
            <>
            <Navbar/>
            <Landing/>
            <Footer/>
            </>
         } />
         <Route path='/login' element={
            <>
            <Navbar/>
            <Login />
            <Footer/>
            </>
         } />
         <Route path='/signup' element={
            <>
            <Navbar/>
            <Signup />
            <Footer/>
            </>
         } />
         <Route path='/demo' element={
            <>
            <Navbar/>
            <Demo />
            <Footer/>
            </>
         } />
         <Route path='/pricing' element={
            <>
            <Navbar/>
            <Pricing/>
            <Footer/>
            </>
         } />
         <Route path='/dashboard' element={
            <RequireAuth>
               <TabsSidebar />
            </RequireAuth>
         } />
      </Routes>
   );
}

export default AllRoutes;