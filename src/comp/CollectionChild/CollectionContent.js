import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "./CollectionContent.css";
import styled from 'styled-components';
import { MdBarChart } from "react-icons/md";
import { TbChartPie } from "react-icons/tb";
import CollectionBarChart from './CollectionBarChart';
import DonutCharts from './CollectionnTest';
import CollectionCharts1 from './CollectionPie1';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CollectionContent = () => {


  const barData = {
    labels: ['Mixed Waste/Others', 'usehold Hazardous Waste', 'Recyclable Dry Waste', 'Nondegradable Waste', 'Biodegradable Wet Waste'],
    datasets: [
      {
        data: [3, 6, 3, 4.5, 12.5],
        backgroundColor: [
          '#A9A9A9',  
          '#EE4B3C', 
          '#52AAA4',  
          '#E56730',  
          '#628C6E', 
        ],
        barThickness: 20,
        borderRadius: 10,
      },
    ],
  };

  const barData2 = {
    labels: ['Mixed Waste/Others', 'usehold Hazardous Waste', 'Recyclable Dry Waste', 'Nondegradable Waste', 'Biodegradable Wet Waste'],
    datasets: [
      {
        data: [300, 6, 3, 4.5, 12.5],
        backgroundColor: [
          '#A9A9A9',  
          '#EE4B3C', 
          '#52AAA4',  
          '#E56730',  
          '#628C6E', 
        ],
        barThickness: 20,
        borderRadius: 10,
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        anchor: 'end',
        align: 'end',
        color: '#444',
        formatter: (value) => `${value} MT`, 
        font: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 15,
        ticks: {
          stepSize: 3,
        },
        grid: {
          display: true,
          drawBorder: false,
          color: '#E0E0E0',
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    layout: {
      padding: {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15
      }
    },
  };

  const [activeTab2, setActiveTab2] = useState('Bar');

//   const StyledChart = styled.div`
//   .apexcharts-pie-series path {
//     transition: all 0.01s ease;
//   }
//   .apexcharts-pie-series:hover path {
//     transform: scale(1.03);
//     transform-origin: center;
//   }
// `;

const DonutCharts1 = () => {
  const chartOptions = {
    labels: ["Biodegradable Wet Waste", "Nondegradable Waste", "Recyclable Dry Waste", "Household Hazadous Waste", "Mixed Waste/others"],
    colors: ['#628C6E', '#E56730','#52AAA4','#EE4B3C','#9F9F9F'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            total: {
              show: true,
              label: 'Total',
              formatter: () => '114 MT',
            }
          },
        },
        expandOnClick: false,
      },
    },
    dataLabels: {
      offset: -10,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      },
    },
    stroke: {
      show: false,
    },
    chart: {
      id: 'donut-chart',
      offsetX: 65,
      offsetY: 0,
    },
    grid: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      }
    },
  }
  };


  return (
    <>
      <div className='Collectioncontainer'>
        <div className='chart-container'>
          <div className='donutcontainer'>
            <div className='donuttitle'>
            <h4 >Target vs Actual Collection (MT)</h4>
            </div>
            <CollectionCharts1/>
          </div>
          <div className='barcontainer'>
            <div className='Collectionlefttitle'>
            <h4>Waste Category wise Collection(MT)</h4>
            <div className='Collectionicons'>
            <button id='but1'
                 onClick={() =>setActiveTab2('Bar')}><MdBarChart/>
              </button>
              <button id='but2'
                onClick={() =>setActiveTab2('Pie')}><TbChartPie/>
                </button>
            </div>
            </div>
            <div style={{ height: '300px', width: '600px', position: 'relative' }}>
        {activeTab2 === 'Bar' ? (
          <Bar data={barData} options={barOptions} />
        ) : ( <DonutCharts/>
        )}
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionContent;