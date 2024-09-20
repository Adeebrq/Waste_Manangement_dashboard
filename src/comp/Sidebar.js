import React from "react";
import { NavLink } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { TiDocument } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { LiaSitemapSolid } from "react-icons/lia";
import "./Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>LOGO</h1>
      <ul>
        <li>
          <NavLink exact to="/Home" activeClassName="active-link">
            <i><MdDashboard /></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><MdPeople /></i>Resource Allocation
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><MdPeople /></i> March Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><BsDatabaseFillAdd /></i> Add Data
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><TbReport /></i> Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><TiDocument /></i> Review
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><FaLocationDot /></i> Ward Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/Home" activeClassName="active-link">
          <i><LiaSitemapSolid /></i> Hierarchy
          </NavLink>
        </li>
      </ul>
      <p style={{
        fontWeight: "600"
      }}>*sidebar is disabled on purpose*</p>
    </div>
  );
};

export default Sidebar;
