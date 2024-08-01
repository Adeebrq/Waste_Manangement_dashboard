import React from "react";
import "./CoverageContent.css";

const DataCard = ({ title, totalTarget, totalAchieved, percentageAchieved }) => (
  <div className="Coveragecard">
    <div className="card-header">{title}</div>
    <div className="card-body">
      <p>Total Target : <span style={{ color: 'black' }}>{totalTarget}</span></p>
      <p>Total Achieved : <span style={{ color: 'black' }}>{totalAchieved}</span></p>
      <p>Percentage Achieved : <span style={{ color: 'black' }}>{percentageAchieved}%</span></p>
    </div>
  </div>
);

const CoverageChild = () => {
  const data = [
    {
      title: "D2D Households",
      totalTarget: 108492,
      totalAchieved: 82958,
      percentageAchieved: 76.5
    },
    {
      title: "D2D Commercial Establishment",
      totalTarget: 7695,
      totalAchieved: 7695,
      percentageAchieved: 100.5
    },
    {
      title: "Sweeping - More Than 6m",
      totalTarget: 25,
      totalAchieved: 10,
      percentageAchieved: 40.0
    },
    {
      title: "Sweeping 5-6m",
      totalTarget: 60,
      totalAchieved: 13,
      percentageAchieved: 21.7
    }
  ];

  return (
    <div className="Coveragecontainer">
      <div className="top-row">
        {data.slice(0, 3).map((item, index) => (
          <DataCard key={index} {...item} />
        ))}
      </div>
      <div className="bottom-row">
        <DataCard {...data[3]} />
      </div>
    </div>
  );
};
export default CoverageChild;