import React from "react";
import {NavLink} from "react-router-dom";
import "./hNavbar.css";
import Attendance from "../comp/Attendance";
import Collection from "../comp/Collection";
import Payment from "../comp/Payment";
import Segregation from "../comp/Segregation";
import VehicleRent from "../comp/VehicleRent";
import Coverage from "../comp/Coverage";


const HNavbar = () => {

    const data= [{ id: 1, value: "Attendance", isActive:false},
        { id: 2, value: "Coverage", isActive:false},
        { id: 3, value: "Collection", isActive:false},
        { id: 4, value: "Segregation", isActive:false},
        { id: 5, value: "Vehicle rent", isActive:false},
        { id: 6, value: "Payment", isActive:false},
    ]
    const renderComponent =(value)=>{
        const component= {
            "Attendance": <Attendance/>,
            "Coverage": <Coverage/>,
            "Collection":<Collection/>,
            "Segregation":<Segregation/>,
            "Vehicle rent":<VehicleRent/>,
            "Payment":<Payment/>
        }
        return(
            component[value]
        )

    }
    renderComponent.defaultProps={value: "Attendance"}


    return(
            <div className="hcontainer">
                <ul>
                    {data.map(item=>{
                        return <li>{item.value}</li>
                    })}

                </ul>
                
            </div>
            {renderComponent()}
    )

}
export default HNavbar;