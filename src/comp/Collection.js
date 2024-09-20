import React, { useState } from 'react';
import {DatePicker} from "antd";
import CollectionContent from './CollectionChild/CollectionContent';
import "./CollectionChild/ColNavbar.css"
import CollectionMonth from './CollectionChild/CollectionMonth';
import DonutCharts from './CollectionChild/CollectionnTest';


const Collection = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const renderContent = () => {
    switch(activeTab) {
      case 'Today':
        return <CollectionContent />;
      case 'Week':
        return <WeekContent />;
      case 'Month':
        return <CollectionMonth />;
      default:
        return <CollectionContent />;
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


const WeekContent = () => <div>Week's Collection Content</div>;

export default Collection;