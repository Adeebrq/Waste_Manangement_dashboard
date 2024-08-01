import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './CoverageGraph.css';

const ChartComponent = ({ title, data, max }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Feb 28'],
        datasets: [
          {
            label: 'Achieved',
            data: [data.achieved],
            backgroundColor: '#9CCC65',
            barPercentage: 0.1,
          },
          {
            label: 'Target',
            borderRadius: 10,
            data: [data.target],
            backgroundColor: '#EF5350',
            barPercentage: 0.1,
          },
        ],
      },
      plotOptions: {
        bar: {
          columnWidth: '20%'
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        bar: {
            columnWidth: '20%'
          },
        scales: {
          x: { 
            stacked: true,
            grid: {
                show: true,
                drawBorder: true,
                lineWidth: 1,
                borderWidth: 2,
                xaxis: {
                  lines: {
                    show: true
                  }
                },
                yaxis: {
                  lines: {
                    show: true
                  }
                }
              }
          },
          y: { 
            stacked: true,
            max: max,
            ticks: { 
              stepSize: max / 5,
              callback: function(value) {
                return value.toLocaleString();
              }
            },
            grid: {
                show: true,
                drawBorder: true,
                xaxis: {
                  lines: {
                    show: true,
                    lineWidth: 1,
                    borderWidth: 2,

                  }
                },
                yaxis: {
                  lines: {
                    show: true,
                    lineWidth: 1,
                    borderWidth: 2,
                  }
                }
              }
          }
        },
        plugins: {
          title: {
            display: true,
            text: title,
            font: { size: 16, weight: 'bold' },
            padding: { bottom: 20 }
          },
          legend: {
            position: 'top',
            align: 'end',
            labels: { 
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
            }
          }
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 10
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [title, data, max]);

  return <canvas ref={chartRef} />;
};

const App = () => {
  const chartData = [
    { 
      title: 'D2D Households - BOV',
      data: { achieved: 29000, target: 20000 },
      max: 60000
    },
    { 
      title: 'D2D Households - LCV',
      data: { achieved: 34000, target: 12000 },
      max: 60000
    },
    { 
      title: 'D2D Commercial Establishment - LCV',
      data: { achieved: 1900, target: 3100 },
      max: 6000
    },
    { 
      title: 'D2D Commercial Establishment - HCV',
      data: { achieved: 2500, target: 400 },
      max: 3000
    }
  ];

  return (
    <div className="chart-container">
      {chartData.map((chart, index) => (
        <div key={index} className="chart-item">
          <ChartComponent {...chart} />
        </div>
      ))}
    </div>
  );
};

export default App;