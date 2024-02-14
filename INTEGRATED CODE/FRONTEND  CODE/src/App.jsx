
import React from "react";
import './App.css';
import LoginForm from "./Login";
import RegistrationForm from "./SignUp";
import Ahome from "./Ahome";
import Post from './components/Post.jsx';
import Management from "./components/Management.jsx";
import Uhome from "./Uhome.jsx";
import PPost from "./PPost.jsx";
import AboutUs from "./AboutUs.jsx";
import Services from "./Services.jsx";
import Contact from  "./Contact.jsx";
import Viewgift from "./Viewgift.jsx";
import MainPage from "./MainPage.jsx";
import ViewOrders from "./ViewOrders.jsx";
import MyOrders from "./MyOrders.jsx";
import Login from "./Login";
import Register from "./Register.jsx";
import AdminLogin from "./AdminLogin.jsx";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Login />} />
       <Route path="/Register" element={<Register/>} />
       <Route path="/adminlogin" element={<AdminLogin/>} />
       
      
       
       <Route path="/Ahome" element={<Ahome />} />
       <Route path="/Aaddgift" element={<Post/>} />
       <Route path="/Aviewgift" element={<Management/>} />
       <Route path="/Uhome" element={<Uhome/>} />
       <Route path="/viewgift" element={<Viewgift/>} />
       <Route path="/aboutus" element={<AboutUs/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/purchase" element={<PPost/>} />
       <Route path="/vieworders" element={<ViewOrders/>} />
       <Route path="/myorders" element={<MyOrders/>} />

       
       
       
       
      
        
      </Routes>
    </Router>
  );
};

export default App;

