import React, { useState } from 'react';
import {DatePicker} from "antd";
import PaymentContent from "./PaymentChild/PaymentContent"
import "./PaymentChild/PaymentContent.css"


const Attendance = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const renderContent = () => {
    switch(activeTab) {
      case 'Today':
        return <PaymentContent />;
      case 'Week':
        return <WeekContent />;
      case 'Month':
        return <MonthContent />;
      default:
        return <PaymentContent />;
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


const WeekContent = () => <div>Intentionally Empty</div>;
const MonthContent = () => <div>Intentionally Empty</div>;

export default Attendance;