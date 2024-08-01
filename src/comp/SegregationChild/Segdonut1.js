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

const Segdonut1 = () => {
  const chartOptions = {
    labels: ["Pending", "Actual Collection"],
    colors: ['#F4B63E', '#979797'],
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
      offsetX: -70,
      offsetY: -40,
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
        height={250}
        series={[93,7]}
        options={chartOptions}
      />
    </StyledChart>
  );
};

export default Segdonut1;