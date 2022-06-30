import React from 'react';
import pieChartImage from '../../Assets/Images/pie_img.png';
import './Chart.css';


const Chart = () => {
    return(
        <div>
            <div>
                <img src={pieChartImage} alt ='some images here' className="pie_chart"/>
            </div>
        </div>
    );

}

export default Chart;