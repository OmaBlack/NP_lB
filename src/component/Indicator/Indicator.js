import React from "react";
import { NavLink } from "react-router-dom";
import './Indicator.css'
import dot from "../../Images/bluedot.jpeg";

const Indicator =() => {
  
    const data = [
        {
            no1: 1,
            title : 'START',
            img: dot,
            url: "/"
        },
        {
            no1: 2,
            title : 'INFORMATION',
            img: dot,
            url: "/getInstanceLoan"

        },
        {
            no1: 3,
            title : 'FINANCIAL',
            img: dot,
            url: "/additionalInformation"

        },
        {
            no1: 4,
            title : 'CALCULATE',
            img: dot,
            url: "/calculateCredit"

        },
    ]
    return (
            <div className='indicator'>
                    {data.map(({no1, title, img, url}) => (
                        <NavLink className='indc' to={url}>
                            <div className="num1">{no1}</div>
                            <div className='start'>{title}</div>
                            <img src={img} alt ='icon missing'/>
                        </NavLink>
                    ))}
            </div>
        
    );

};

export default Indicator;