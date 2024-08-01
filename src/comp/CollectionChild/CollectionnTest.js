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

const DonutCharts = () => {
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
  };

  return (
    <StyledChart>
      <Chart
        type="donut"
        width={500}
        height={450}
        series={[53, 16, 14, 4, 13]}
        options={chartOptions}
      />
    </StyledChart>
  );
};

export default DonutCharts;