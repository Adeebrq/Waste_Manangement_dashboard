import React from "react";
import "./PaymentContent.css"

const PaymentChild = ()=>{
        const tableData = [
          { component: "Final amount after deduction", amount: "₹343519.4" },
          { component: "Fixed Payment", amount: "₹224339.44" },
          { component: "Performance Based Payment", amount: "₹135229.96" },
          { component: "Total Payment without Deduction", amount: "₹359569.4" },
          { component: "Vehicle Rent", amount: "₹13050" },
        ];
      
        return (
          <div className="table-container">
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Total Components</th>
                  <th className="separator"></th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.component}</td>
                    <td className="separator"></td>
                    <td>{row.amount}</td>
                  </tr>
                ))}
                <tr className="empty-row"><td colSpan="3"></td></tr>
              </tbody>
            </table>
        </div>
      );
};
export default PaymentChild;