import React from 'react';
import './InformationPageTemp.css';
import Indicator from  '../Indicator/Indicator.js';
import SideBarText from '../SideBar/SideBarText.js';
import Nerve from '../Nerve/Nerve.js';
import Chart from '../Chart/Chart.js';
import SecondPageCentered from '../Pages/InformationPage';

const TemplateHolder2 =()=>{

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
                        <SecondPageCentered/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder2;