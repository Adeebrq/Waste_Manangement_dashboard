import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./comp/Layout";
import Dashboard from "./Pages/Dashboard";
import ResourceAllocation from "./Pages/ResourceAllocation";
import MarchOut from "./Pages/MarchOut";
import AddData from "./Pages/AddData";
import Reports from "./Pages/Reports";
import Review from "./Pages/Review";
import WardManagement from "./Pages/WardManagement";
import Hierarchy from "./Pages/Hierarchy";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Layout />}>
          <Route path="/Home" element={<Dashboard />} />
          <Route path="resource-allocation" element={<ResourceAllocation />} />
          <Route path="march-out" element={<MarchOut />} />
          <Route path="add-data" element={<AddData />} />
          <Route path="reports" element={<Reports />} />
          <Route path="review" element={<Review />} />
          <Route path="ward-management" element={<WardManagement />} />
          <Route path="hierarchy" element={<Hierarchy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
