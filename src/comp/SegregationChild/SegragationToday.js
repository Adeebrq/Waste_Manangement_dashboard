import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend as Legend2, RadialBarChart, RadialBar, } from 'recharts';
import { Bar as Bar2 } from 'react-chartjs-2';
import Chart from "react-apexcharts";
import './SegragationToday.css';
import SegragationTest from './SegregationTest';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Segdonut1 from './Segdonut1';
import Segdonut2 from './Segdonut2';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);





const SegragationToday = () => {

    // data for the 2nd chart
    const barChartData1 = {
      labels: [
      "Feb 28"
      ],
      datasets: [
        {
          label: "Commercial Establishment Segregation",
          backgroundColor: "#D17B24",
          borderColor: "#D17B24",
          borderWidth: 1,
          borderRadius: 10,
          data: [50],
          barThickness: 30
        },
        {
          label: "Household Segregation",
          backgroundColor: "#43B54E",
          borderColor: "#43B54E",
          borderRadius: 10,
          data: [40],
          barThickness: 30
   
        },
        {
          label: "Primary collection",
          backgroundColor: "#E91A6C",
          borderColor: "#E91A6C",
          borderWidth: .5,
          borderRadius: 10,
          data: [55],
          barThickness: 30
  
        },
      ]
    };




  const chartOptions1 = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
              // chnaging legend to circle
              generateLabels: (chart) => {
                // getting default legend items
                const original = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
                // To filter
                return original.filter((legendItem) => {
                  const dataset = chart.data.datasets.find(ds => ds.label === legendItem.text);
                  return dataset && dataset.type !== 'line'; // Hide line datasets
                });
              },
              usePointStyle: true, 
              pointStyle: 'circle', 
              boxWidth: 10, 
            }
          }
        },
    scales: 
    {
        x: {
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              align: 'center',
              anchor: 'center'
            }
          },
      y: {
        beginAtZero: true,
        suggestedMax: 60,
      }
    }
  };


  
  return(
  <div className='SCollectioncontainer'>
  <div className='Schart-container'>
    <div className='Sdonutcontainer'>
      <div className='Sdonut1'>
      <div className='donuttitle'>
      <h4 id='STtitle'>Collection vs Segragation</h4>
      </div>
      < Segdonut1/>
      <p id='S1'>Collection Status</p>
    </div>
    <div className='Sdonut2'>
      <Segdonut2/>

      <p id='S2'>Segragation Status</p>
    </div>
    <div className='SMbarcontainer'>
      <div className="segtodaybarchart1">
          <div className="segMtitle">
            <h4 id='segtitle2'>Primary collection Vs D2D Segregation</h4>
        </div>
        <div style={{ width: "400px", height: '400px',  position: 'relative' }}>
      <div style={{ width: "400px"}}><Bar2 data={barChartData1} options={chartOptions1} /></div>
      </div>
      </div>
    </div>
    </div>
  </div>
  <div className='Sradiallchart'>
    <SegragationTest/>
    </div>
</div>
  );
};
export default SegragationToday;