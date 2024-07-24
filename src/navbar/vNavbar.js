import React from "react";
import { NavLink } from "react-router-dom";
import "./vNavBar.css";
import { MdDashboard } from "react-icons/md";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { TiDocument } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { LiaSitemapSolid } from "react-icons/lia";

const VNavbar = () => {
    return(
        <div className="vnavbar">
            <div className="container">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="navbar">
                    <ul>
                    <li><NavLink exact to="/Dashboard" ><MdDashboard />dashboard</NavLink></li>
                     <li><NavLink to="/ResourceAllocation" activeClassName="active-link"><i><MdPeople/></i>Resource Allocation</NavLink></li>
                     <li><NavLink to="/MarchOut" activeClassName="active-link"><i><MdPeople /></i>March Out</NavLink></li>
                     <li><NavLink to="/AddData" activeClassName="active-link"><BsDatabaseFillAdd />Add data</NavLink></li>
                     <li><NavLink to="/Reports" activeClassName="active-link"><TbReport />Reports</NavLink></li>
                     <li><NavLink to="/Review" activeClassName="active-link"><TiDocument />Review</NavLink></li>
                     <li><NavLink to="/WardManagement" activeClassName="active-link"><FaLocationDot />Ward Management</NavLink></li>
                     <li><NavLink to="/Hierarchy" activeClassName="active-link"><LiaSitemapSolid />Hierarchy</NavLink></li>
                  </ul>
                </div>
            </div>
        </div>
    )
}
export default VNavbar;