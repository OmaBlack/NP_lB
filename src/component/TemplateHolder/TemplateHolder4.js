import React from 'react';
import '../component/TemplateHolder.css';
import Indicator from  './Indicator4.js';
import SideBarText from './SideBarText';
import Nerve from './Nerve.js';
import Chart from './Chart.js';
import FourthPageDiv from './FourthPageDiv';

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