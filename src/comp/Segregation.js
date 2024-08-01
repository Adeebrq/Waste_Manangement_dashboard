import React, { useState } from 'react';
import {DatePicker} from "antd";
import "./Styles/Attendance.css"
import SegragationToday from './SegregationChild/SegragationToday';
import SegragationMonth from './SegregationChild/SegregationMonth';
import SegragationTest from './SegregationChild/SegregationTest';

const Segregation =()=>{

    const [activeTab, setActiveTab] = useState('Today');

  const renderContent = () => {
    switch(activeTab) {
      case 'Today':
        return <SegragationToday />;
      case 'Week':
        return <SegragationTest />;
      case 'Month':
        return <SegragationMonth />;
      default:
        return <SegragationToday />;
    }
  };

  return (
    <div>
      <div className="Newcontainer">
      <div className="subnavbar">
        <button 
          onClick={() => setActiveTab('Today')}
          className={activeTab === 'Today' ? 'active' : ''}>Today</button>
        <button 
          onClick={() => setActiveTab('Week')}
          className={activeTab === 'Week' ? 'active' : ''}>Week
        </button>
        <button 
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


const WeekContent = () => <div>Week's Segregation Content</div>;

export default Segregation;



