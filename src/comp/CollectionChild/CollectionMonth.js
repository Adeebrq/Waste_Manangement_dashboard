import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend as Legend2 } from 'recharts';
import "./CollectionMonth.css"
import { Bar as Bar2 } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CollectionMonth = ()=>{
  
    const data = [
        { name: 'Feb 1', Target: 100,  Collection: 80, },       
        { name: 'Feb 2', Target: 90,  Collection: 90,  },
        { name: 'Feb 3', Target: 147,  Collection: 33,  },
        { name: 'Feb 4', Target: 56,  Collection: 124,  },
        { name: 'Feb 5', Target: 125,  Collection: 55,  },
        { name: 'Feb 6', Target: 156,  Collection: 24,  },
        { name: 'Feb 7', Target: 129,  Collection: 51,  },
        { name: 'Feb 8', Target: 38,  Collection: 142,  },
        { name: 'Feb 9', Target: 169,  Collection: 11,  },
        { name: 'Feb 10', Target: 75,  Collection: 105,  },
        { name: 'Feb 11', Target: 152,  Collection: 28, },       
        { name: 'Feb 12', Target: 46,  Collection: 134,  },
        { name: 'Feb 13', Target: 134,  Collection: 46,  },
        { name: 'Feb 14', Target: 125,  Collection: 55,  },
        { name: 'Feb 15', Target: 46,  Collection: 134,  },
        { name: 'Feb 16', Target: 153,  Collection: 27,  },
        { name: 'Feb 17', Target: 6,  Collection: 174,  },
        { name: 'Feb 18', Target: 124,  Collection: 56,  },
        { name: 'Feb 19', Target: 16,  Collection: 164,  },
        { name: 'Feb 20', Target: 96,  Collection: 84,  },
        { name: 'Feb 21', Target: 100,  Collection: 80, },       
        { name: 'Feb 22', Target: 35,  Collection: 145,  },
        { name: 'Feb 23', Target: 135,  Collection: 45,  },
        { name: 'Feb 24', Target: 44,  Collection: 136,  },
        { name: 'Feb 25', Target: 136,  Collection: 44,  },
        { name: 'Feb 26', Target: 125,  Collection: 55,  },
        { name: 'Feb 27', Target: 38,  Collection: 142,  },
        { name: 'Feb 28', Target: 129,  Collection: 51,  },
        { name: 'Feb 29', Target: 156,  Collection: 24,  },
    ];

    // FOR  HORIZONTAL BAR CHART
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
 
    return (
        <>
        <div className='colmonthcontainer'>
            <div className='colmonthcontainer2'>
            <div className='colmonleftchart'>
                <div className='colmonlefttitle'>
                <h4 id='leftittle'>Target vs Actual Collection (MT)</h4>
                </div>                
        <BarChart width={588} height={355} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" 
            angle={-90} 
            textAnchor="end" 
            height={100}
            interval={0} 
            dy={2}/>
            <YAxis />
            <Bar dataKey="Target" stackId="a" fill="#F94144" /> 
            <Bar dataKey="Collection" stackId="a" fill="#90BE6D" radius={[10, 10, 0, 0]}/> 
        </BarChart>
        </div>
        <div className='colmonrightchart'>
            <h4 id='title'>Waste Category wise Collection (MT)</h4>
            <div style={{ height: '300px', width: '470px', position: 'relative' }}>
              <Bar2 data={barData} options={barOptions} />
            </div>
          </div>
          </div>
        </div>
        </>
    );
}
export default CollectionMonth;



 
 
