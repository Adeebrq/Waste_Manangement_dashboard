import React, { useState } from 'react';
import {DatePicker} from "antd";
import CoverageContent from "./CoverageChild/CoverageContent"
import "./CoverageChild/CoverageBar.css"
import CoverageGraph from './CoverageChild/CoverageGraph';

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineChartBar } from "react-icons/hi";


const Attendance = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const renderContent = () => {
    switch(activeTab) {
      case 'Today':
        return <CoverageContent />;
      case 'Week':
        return <WeekContent />;
      case 'Month':
        return <MonthContent />;
      case 'Today1':
        return <CoverageData />;
      default:
        return <CoverageContent />;
      
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

        <button id='butt1'
          onClick={() => setActiveTab('Today')}
          className={activeTab === 'Today' ? 'active' : ''}><MdOutlineSpaceDashboard/>
        </button>

        <button id='butt2'
          onClick={() => setActiveTab('Today1')}
          className={activeTab === 'Today1' ? 'active' : ''}><HiOutlineChartBar/>
        </button>

        <span id='date'><DatePicker /></span>
      </div>
      {renderContent()}
    </div>
    </div>
  );
};

const CoverageData=()=> <CoverageGraph/>;
const WeekContent = () => <div>Week's Coverage Content</div>;
const MonthContent = () => <div>Month's Coverage Content</div>;

export default Attendance;