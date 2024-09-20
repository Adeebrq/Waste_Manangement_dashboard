import React, { useState } from 'react';
import {DatePicker} from "antd";
import "./CoverageChild/CoverageBar.css"


import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";
import VehicleRentContent from './VehicleRentChild/VehicleRentContent';


const Attendance = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const renderContent = () => {
    switch(activeTab) {
      case 'Today':
        return <VehicleRentContent />;
      case 'Week':
        return <WeekContent />;
      case 'Month':
        return <VehicleRentContent />;
      default:
        return <VehicleRentContent />;
      
    }
  };

  return (
    <div>
      <div className="Newcontainer">
      <div className="subnavbar">

        <button id='time'
          onClick={() => setActiveTab('Today')}
          className={activeTab === 'Today' ? 'active' : ''}>Today
        </button>

        <button id='time'
          onClick={() => setActiveTab('Week')}
          className={activeTab === 'Week' ? 'active' : ''}>Week
        </button>

        <button id='time'
          onClick={() => setActiveTab('Month')}
          className={activeTab === 'Month' ? 'active' : ''}>Month
        </button>

        <span id='date'><DatePicker /></span>
      </div>
      {renderContent()}
    </div>
    </div>
  );
};

const WeekContent = () => <div>Intentionally Empty</div>;


export default Attendance;