import React from "react";
import '../component/FourthPageDiv.css';


const FourthPageDiv = ()=> {
    return(
        <div>
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
                    <button className="button1" placeholder="proceed">Proceed</button>
                    <button className="button2" placeholder="Next">Next</button>
                </div>
            </div>

        </div>

    )
}


export default FourthPageDiv;