import React from "react";
import "./Attendance.css"
import { NavLink } from "react-router-dom";

const Attendance =()=>{
    return(
        <div className="AttendNavbar">
            <ul>
            <li><NavLink to="/Dashboard/Attendance/Today" className={({ isActive }) => (isActive ? 'active-link' : '')}>Today</NavLink></li>
            <li><NavLink to="/Dashboard/Attendance/Week" className={({ isActive }) => (isActive ? 'active-link' : '')}>Week</NavLink></li>
            <li><NavLink to="/Dashboard/Attendance/Month" className={({ isActive }) => (isActive ? 'active-link' : '')}>Month</NavLink></li>
            </ul>
        </div>

    )
}
export default Attendance;