import React, { useState } from "react";
import "./styles/Dashboard.css";
import Attendance from "../comp/Attendance";
import Collection from "../comp/Collection";
import Payment from "../comp/Payment";
import Segregation from "../comp/Segregation";
import VehicleRent from "../comp/VehicleRent";
import Coverage from "../comp/Coverage";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Attendance");

  const data = [
    { id: 1, value: "Attendance" },
    { id: 2, value: "Coverage" },
    { id: 3, value: "Collection" },
    { id: 4, value: "Segregation" },
    { id: 5, value: "Vehicle rent" },
    { id: 6, value: "Payment" },
  ];

  const renderComponent = (value) => {
    const component = {
      Attendance: <Attendance />,
      Coverage: <Coverage />,
      Collection: <Collection />,
      Segregation: <Segregation />,
      "Vehicle rent": <VehicleRent />,
      Payment: <Payment />,
    };
    return component[value];
  };

  return (
    <>
      <div className="hcontainer">
        <ul>
          {data.map((item) => (
            <li
              className={activeComponent === item.value ? "active-link" : ""}
              key={item.id}
              onClick={() => setActiveComponent(item.value)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="component-container">
        {activeComponent && renderComponent(activeComponent)}
      </div>


    </>
  );
};

export default Dashboard;
