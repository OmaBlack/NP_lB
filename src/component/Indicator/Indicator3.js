import React from "react";
import '../component/Indicator3.css'
import dot from "../images/bluedot.jpeg"
import dot1 from '../images/light blue.png';

const Indicator =() => {
    const start = 'START';
    const information = 'INFORMATION';
    const calculate = 'CALCULATE';
    const finance = 'FINANCIAL';
    return (
        <div>
            <div className='indicator'>
                <div className='indc'>
                    <div className="num1">01</div>
                    <div className='start'>{start}</div>
                    <img src={dot1} alt ='icon missing'/>
                </div>
                <div className='indc'>
                    <div className='num2'>02</div>
                    <div className='information'>{information}</div>
                    <img src={dot1} alt = 'icon missing' className='img-lightblue2' />
                </div>
                <div className='indc'>
                    <div className='num3'>03</div>
                    <div className='finance'>{finance}</div>
                    <img src={dot} alt = 'icon missing'  className='img-lightblue3'/>
                </div>
                <div className='indc'>
                    <div className='num4'>04</div>
                    <div className='calculate'>{calculate}</div>
                    <img src={dot1} alt = 'icon missing' className='img-lightblue4'/>
                </div>
            </div>
        </div>
        
    );

};

export default Indicator;