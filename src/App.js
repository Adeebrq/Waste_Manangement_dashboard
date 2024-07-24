import React, { useState } from "react";
import './App.css';
import VNavbar from "./navbar/vNavbar";
import HNavbar from "./navbar/hNavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Attendance from "./comp/Attendance";
import Rout from "./Route1";
import Layout from "./comp/Layout";
import Dashboard from "./comp/Dashboard";
import Collection from "./comp/Collection";
import Payment from "./comp/Payment";
import Segregation from "./comp/Segregation";
import VehicleRent from "./comp/VehicleRent";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (

    <BrowserRouter>
        <Layout />
        <Routes> 

            <Route path="/Dashboard " element={<Dashboard  />}/>
            <Route path="/Dashboard/Attendance" element={<Attendance/>}/>
            <Route path="/Dashboard/Coverage" element={<Collection/>} />

            <Route path="/Dashboard/Payment" element={<Payment/>}/>
            <Route path="/Dashboard/Segregation" element={< Segregation/>}/>
            <Route path="/Dashboard/VehicleRent" element={<VehicleRent/>} />

        </Routes>
    </BrowserRouter>

  );
}

export default App;