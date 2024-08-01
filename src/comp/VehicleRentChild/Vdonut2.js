import React from 'react';
import Chart from 'react-apexcharts'; // Assuming you're using react-apexcharts
import styled from 'styled-components'; // You'll need to install styled-components

const StyledChart = styled.div`
  .apexcharts-pie-series path {
    transition: all 0.01s ease;
  }
  .apexcharts-pie-series:hover path {
    transform: scale(1.05);
    transform-origin: center;
  }
`;

const Vdonut2 = () => {
    const series2=[680,500,500]
  const chartOptions2 = {
    labels: ["BOV", "LCV", "HCV"],
    colors: ['#6A87D4', '#DA917E','#AB3FD9'],
    plotOptions2: {
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
        enabled: true,
        formatter: (value, { seriesIndex }) => {
          const seriesValue = series2[seriesIndex];
          return `${seriesValue}`; 
        },
        style: {
          fontSize: '16px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          border: "0",
          colors: ['#FFFFFF'],

        },
        dropShadow: {
          enabled: false 
        }
  },
    stroke: {
      show: false,
    },
    chart: {
      id: 'donut-chart',
      offsetX: 10,
      offsetY: -28,
    },
    grid: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
  };

  return (
    <StyledChart>
      <Chart
        type="donut"
        width={500}
        height={300}
        series={[700,500,300]}
        options={chartOptions2}
      />
    </StyledChart>
  );
};

export default Vdonut2;