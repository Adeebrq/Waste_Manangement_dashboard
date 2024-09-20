import React from "react";
import ApexCharts from 'react-apexcharts';
import "./SegregationTest.css";

const SegragationTest = () => {
  const options = {
    series: [30.34,20.09],
    chart: {
      height: 70,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: '30.34',
            formatter: function (w) {

              return ( 20.09             
            );
            },
          }, 
        },
        track: {
            background: '#E1E1E1', 
            strokeWidth: '100%', 
          },
          bar: {
            strokeWidth: '40%', 
            borderRadius: '8px', 
            colors: ['#F4B63E', '#1ED760'], 
            distributed: true, 
          },
        },
      },
    labels: ['Collection', 'Segregation'],
    colors: ['#F4B63E', '#1ED760'],
  };
  // 2nd radial chart
  const options2 = {
    series: [28.29,15.15],
    chart: {
      height: 70,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: '28.29',
            formatter: function (w) {

              return ( 15.15            
            );
            },
          }, 
        },
        track: {
            background: '#E1E1E1', 
            strokeWidth: '100%', 
          },
          bar: {
            strokeWidth: '40%', 
            borderRadius: '8px', 
            colors: ['#F4B63E', '#1ED760'], 
            distributed: true, 
          },
        },
      },
    labels: ['Collection', 'Segregation'],
    colors: ['#F4B63E', '#1ED760'],
  };
  //3rd radial chart
  const options3 = {
    series: [30.45,19.40],
    chart: {
      height: 70,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: '30.45',
            formatter: function (w) {
              return 19.40       
            },
          }, 
        },
        track: {
            background: '#E1E1E1', 
            strokeWidth: '100%', 
          },
          bar: {
            strokeWidth: '40%', 
            borderRadius: '8px', 
            colors: ['#F4B63E', '#1ED760'], 
            distributed: true, 
          },
        },
      },
    labels: ['Collection', 'Segregation'],
    colors: ['#F4B63E', '#1ED760'],
  };

  return (
    <>
    <div className="Sradialchartcontainer" >
        <div className="Sradialtitle">
            <h4>Divison Wise Waste Collection vs Segregation</h4>
            <div className="Sradiallegends">
            <div className="Sradiallegcontainer">

            <div className="Sradiallegend1">
            <span id="Sradiallegendname">Collection</span>
            </div>
            <div className="Sradiallegcontainer">
            <div className="Sradiallegend2">
            <span id="Sradiallegendname">Segregation</span>
            </div>
            </div>
            </div>
            </div>
            </div>
        <div className="Sradialcharts">
    <div className="Sradialchart1">
      <ApexCharts
        options={options}
        series={options.series}
        type="radialBar"
        height={350}
      />
    </div>
    <div className="Sradialchart2">
      <ApexCharts
        options={options2}
        series={options.series}
        type="radialBar"
        height={350}
      />
    </div>
    <div className="Sradialchart3">
      <ApexCharts
        options={options3}
        series={options.series}
        type="radialBar"
        height={350}
      />
    </div>
    </div>
    </div>
    </>
  );
};
export default SegragationTest;

