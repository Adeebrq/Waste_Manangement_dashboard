import React from "react";
import { Routes, Route} from "react-router-dom";
import Attendance from "./comp/Attendance";
import Collection from "./comp/Collection";
import Payment from "./comp/Payment";
import Segregation from "./comp/Segregation";
import VehicleRent from "./comp/VehicleRent";


const Rout =()=>{
    return(
        <>
        <Routes>            
            <Route path="/Dashboard/Attendance" element={<Attendance/>}/>
            <Route path="/Dashboard/Coverage" element={<Collection/>} />
            <Route path="/Dashboard/Payment" element={<Payment/>}/>
            <Route path="/Dashboard/Segregation" element={< Segregation/>}/>
            <Route path="/Dashboard/VehicleRent" element={<VehicleRent/>} />
        </Routes>
        </>
    )
}
export default Rout;