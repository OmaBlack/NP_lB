import React from 'react';
import pieChartImage from '../images/pie chart round.png';
import '../component/Chart.css';


const Chart = () => {
    return(
        <div>
            <div>
                <img src={pieChartImage} alt ='some images here' className='pie-chart'/>
            </div>
        </div>
    );

}

export default Chart;