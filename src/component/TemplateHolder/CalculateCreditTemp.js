import React from 'react';
import './CalculateCreditTemp.css';
import Indicator from  '../Indicator/Indicator.js';
import SideBarText from '../SideBar/SideBarText.js';
import Nerve from '../Nerve/Nerve.js';
import Chart from '../Chart/Chart.js';
import FourthPageDiv from '../Pages/CalculateCreditPage';

const TemplateHolder4 =()=>{

    return(

        <div>
            <div className>
                <div className='wrapper'>
                    <div className='row-div'>
                        <Nerve/>
                        <SideBarText/>
                        <Chart/>
                    </div>
                    <div className='column-div'>
                        <Indicator/>
                        <FourthPageDiv/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder4;