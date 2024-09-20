import React from "react";
import "./TodayContent.css"

import { MdElectricRickshaw } from "react-icons/md";
import { ReactComponent as Icon1 } from './icons/Icon1.svg'; 
import { ReactComponent as Icon2 } from './icons/icon2.svg'; 
import truck from './icons/truck.png'; 
import person1 from './icons/person1.png'; 
import { ReactComponent as Rickshaw } from './icons/Rickshaw.svg'; 

const Today=()=>{
    return(
        <div className="todaycontent">
            <div className="contentbox">
                <div className="box">
                    <div className="boxtitle">
                        <h5>Vehicle Deployment</h5>
                    </div>
                    <div className="data">
                    <div className="databox">
                        <div className="leftbox">
                            <i id="icon"><MdElectricRickshaw /></i>
                                <p id="text">BOV</p>                       
                        </div>
                        <div className="rightbox">
                            <p id="text">114/128</p>
                        </div>

                    </div>
                    <div className="databox">
                        <div className="leftbox">
                            <img src={truck} id="icon"/>
                                <p id="text">LCV</p>                       
                        </div>
                        <div className="rightbox">
                            <p id="text">114/128</p>
                        </div>
                    </div>
                    </div>
                    <div className="bottombox">
                    <div className="databox">
                        <div className="leftbox">
                            <i id="icons"><Icon1/></i>
                                <p id="text">HCV</p>                       
                        </div>
                        <div className="rightbox">
                            <p id="text">114/128</p>
                        </div>
                    </div>
                    </div>   

                    </div>
                </div>
                <div className="contentbox">
                <div className="box">
                    <div className="boxtitle">
                        <h5>Vehicle Deployment</h5>
                    </div>
                    <div className="data">
                    <div className="databox">
                        <div className="leftbox">
                            <img src={person1} id="icon"/>
                                <p id="text2">Sanitary workers</p>                       
                        </div>
                        <div className="rightbox">
                            <p id="text">114/128</p>
                        </div>

                    </div>
                    <div className="databox">
                        <div className="leftbox">
                            <i id="icon"><Icon2 /></i>
                                <p id="text3">Supervisor</p>                       
                        </div>
                        <div className="rightbox">
                            <p id="text">114/128</p>
                        </div>
                    </div>
                    </div>                                         
                    </div>
                </div>
        </div>             
    )
}
export default Today;