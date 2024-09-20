import React from 'react';
import Chart from 'react-apexcharts';  
import styled from 'styled-components'; 

const StyledChart = styled.div`
  .apexcharts-pie-series path {
    transition: all 0.01s ease;
  }
  .apexcharts-pie-series:hover path {
    transform: scale(1.05);
    transform-origin: center;
  }
`;

const Segdonut2 = () => {
  const chartOptions2 = {
    labels: ["Pending", "Actual Collection"],
    colors: ['#1ED760', '#979797'],
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
      offsetX: -110,
      offsetY: 34,
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
        width={470}
        height={220}
        series={[74,26]}
        options={chartOptions2}
      />
    </StyledChart>
  );
};

export default Segdonut2;