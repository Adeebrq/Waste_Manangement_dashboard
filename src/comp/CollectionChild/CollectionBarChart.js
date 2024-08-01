import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

const CollectionBarChart =()=>{
    const barData = {
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
    return(
        <div style={{ height: '300px', width: '600px', position: 'relative' }}>
        <Bar data={barData} options={barOptions} />
      </div>
    )
}

export default CollectionBarChart;