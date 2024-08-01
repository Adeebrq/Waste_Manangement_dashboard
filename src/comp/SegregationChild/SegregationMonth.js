import React from "react";
import "./SegregationMonth.css";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const SegragationMonth = () => {
    // data for the 2nd chart
  const barChartData2 = {
    labels: [
    "Feb 1",
    "Feb 2",
    "Feb 3",
    "Feb 4",
    "Feb 5",
    "Feb 6",
    "Feb 7",
    "Feb 8",
    "Feb 9",
    "Feb 10",
    "Feb 11",
    "Feb 12",
    "Feb 13",
    "Feb 14",
    "Feb 15",
    "Feb 16",
    "Feb 17",
    "Feb 18",
    "Feb 19",
    "Feb 20",
    "Feb 21",
    "Feb 22",
    "Feb 23",
    "Feb 24",
    "Feb 25"
    ],
    datasets: [
      {
        label: "Primary Collection",
        backgroundColor: "#A0407E",
        borderColor: "#A0407E",
        borderWidth: 1,
        borderRadius:20,
        data: [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90],
        order: 2
      },
      {
        label: "Household Segregation",
        backgroundColor: "#01D83A",
        borderColor: "#01D83A",
        borderRadius:20,
        data: [75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75],
        order: 2
      },
      {
        label: "Commercial Establishment Segregation",
        backgroundColor: "#621FBC",
        borderColor: "#621FBC",
        borderWidth: 1,
        borderRadius:20,
        data: [30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],
        order: 2,
      },
      {
        label: "Line Dataset 1",
        borderColor: "black",
        borderWidth:2,
        backgroundColor: "transparent",
        data: [70,70,70,70,70,50,70,70,70,70,70,50,70,70,70,70,45,70,70,70,70,60,50,70,40,],
        type: 'line',
        order: 1,
        pointBorderColor: "white",
        pointBackgroundColor: "white", 
        pointRadius: 3, 
        pointHoverBackgroundColor: "white", 
      },
      {
        label: "Line Dataset 2",
        borderColor: "purple",
        borderWidth:2,
        backgroundColor: "transparent",
        data: [30,25,32,29,26,30,25,32,29,26,30,25,32,29,26,30,25,32,29,26,30,25,32,29,26,],
        type: 'line',
        order: 1,
        pointBorderColor: "white",
        pointBackgroundColor: "white", 
        pointRadius: 3, 
        pointHoverBackgroundColor: "white", 
      }
    ]
  };


// data for the 1st chart
  const barChartData1 = {
    labels: [
    "Feb 1",
    "Feb 2",
    "Feb 3",
    "Feb 4",
    "Feb 5",
    "Feb 6",
    "Feb 7",
    "Feb 8",
    "Feb 9",
    "Feb 10",
    "Feb 11",
    "Feb 12",
    "Feb 13",
    "Feb 14",
    "Feb 15",
    "Feb 16",
    "Feb 17",
    "Feb 18",
    "Feb 19",
    "Feb 20",
    "Feb 21",
    "Feb 22",
    "Feb 23",
    "Feb 24",
    "Feb 25"
    ],
    datasets: [
      {
        label: "Daily Collection",
        backgroundColor: "#B5797F",
        borderColor: "#B5797F",
        borderWidth: 1,
        borderRadius:20,
        data: [149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149,149],
        order: 2
      },
      {
        label: "Segregation",
        backgroundColor: "#9EB6E9",
        borderColor: "#9EB6E9",
        borderRadius:20,
        data: [119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119,119],
        order: 2
      },
      {
        label: "Line Dataset 1",
        borderColor: "black",
        borderWidth:2,
        backgroundColor: "transparent",
        data: [109,109,109,109,109,109,109,90,109,109,109,109,90,109,109,109,109,90,109,115,109,120,100,109,90,],
        type: 'line',
        order: 1,
        pointBorderColor: "white",
        pointBackgroundColor: "white", 
        pointRadius: 3, 
        pointHoverBackgroundColor: "white", 
      },
    ]
  };
  const chartOptions1 = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
              // changing to an custom legend
              generateLabels: (chart) => {
                // getting the default legend items
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
        suggestedMax: 180,
      }
    }
  };






  const chartOptions2 = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
              // changing to an custom legend
              generateLabels: (chart) => {
                // getting the default legend items
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
        suggestedMax: 120,
      }
    }
  };

  return (

    <div className="segmonthcontainer">
        <div className="segmonthcontainer2">
         <div className="segbarchart1">
          <div className="segtitle">
            <h4>Daily Collection Vs Segregation</h4>
        </div>
        <div style={{ width: "1020px", height: 'auto',  position: 'relative' }}>
      <div style={{ width: "1020px", height: 'auto'}}><Bar data={barChartData1} options={chartOptions1} /></div>
      </div>
      </div>
      <div className="segbarchart2">
      <div className="segtitle">
            <h4>Primary Collection Vs D2D Segregation</h4>
        </div>
        <div style={{ width: '1000px', position: 'relative', overflow: 'hidden', }}>
        <div style={{ width: "1020px"}}><Bar id="chartt" data={barChartData2} options={chartOptions2}  /></div>
      </div>
      </div>

      </div>
      </div>

  );
};

export default SegragationMonth;
