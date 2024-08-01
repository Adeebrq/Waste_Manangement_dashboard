import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout-content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
