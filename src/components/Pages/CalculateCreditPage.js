import React from "react";
import {Link} from 'react-router-dom';
import Indicator4 from "../Indicator/indicator4";
import './CalculateCreditPage.css';


const FourthPageDiv = ()=> {
    return(
        <div>
            <Indicator4 />
            <div className="Holder">
                <h2>Calculate your credit limit</h2>

                <div className="test-Holder4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br></br> 
                       ullamcorper mattis, pulvinar dapibus leo.</div>

                <div className="smallText">Upload History of insurance claims</div>
                <div className="attachment">attachment</div>
                <div className="dash">
                    <form>
                        <input type = 'text' id='big-form' name = 'bigform1'/>
                    </form>
                </div>
                <div className="div-butt">
                    <Link to='/additionalInformation'>
                    <button className="button1" placeholder="proceed">Previous</button>
                    </Link>

                    <Link to='/successful'>
                    <button className="button2" placeholder="Next">Next</button>
                    </Link>
                </div>
            </div>

        </div>

    )
}


export default FourthPageDiv;