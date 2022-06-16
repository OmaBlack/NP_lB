import React from 'react';
import '../component/TemplateHolder.css';
//import Indicator from  './Indicator5.js';
import SideBarText from './SideBarText';
import Nerve from './Nerve.js';
import Chart from './Chart.js';
import FiftPageDiv from './FiftPageDiv';

const TemplateHolder5 =()=>{

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
                        <FiftPageDiv/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default TemplateHolder5;