import React from "react";
import Chart from "react-apexcharts";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "./VehicleRentContent.css";
import Vdonut1 from "./Vdonut1";
import Vdonut2 from "./Vdonut2";

const VehicleRentContent =()=>{
    const series1=[700,500,300]
    const series2=[680,500,500]
    const data = [
        { total:"", type: 'LCV', count: 1000, amount: 128050 },
        { total:"", type: 'BOV', count: 1380, amount: 192950 },
        { total:"", type: 'HCV', count: 800, amount: 102950 },
      ];
    
      const totals = data.reduce((acc, row) => ({
        count: acc.count + row.count,
        amount: acc.amount + row.amount
      }), { count: 0, amount: 0 });
    return(
        <div className='Vcollectioncontainer'>
         <div className="Vchart-container">
            <div className='Vdonutcontainer'>
                <div className='Vdonuttitle1'>
          <h4 id="title1">Corporation Vehicles</h4>
         </div>
         <Vdonut2/>
      </div>
      <div className='Vdonutcontainer2'>
                <div className='Vdonuttitle2'>
          <h4 id="title2" >Vendor Vehicles</h4>
         </div>
         < Vdonut1/>
      </div>
      </div>
      <div className="Vtable">
  <div className="Vtable-container">
    <h4 id="Vtableheader">Total:</h4>
    <table className="vehicle-table">
      <thead>
        <tr>
          <th>Total :</th>
          <th>Vehicle Type</th>
          <th>No of Vehicles</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td></td>
            <td>{row.type}</td>
            <td>{row.count}</td>
            <td>₹{row.amount}</td>
          </tr>
        ))}
        <tr className="total-row">
          <td></td>
          <td>Total</td>
          <td>{totals.count}</td>
          <td>₹{totals.amount}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
      </div>

    )
}
export default VehicleRentContent;


