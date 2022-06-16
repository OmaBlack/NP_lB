import React from "react";
import '../component/StartCenteredDiv.css';



const StartCenteredDiv = () => {
    return (
        <div>
            <div className="centeredDiv">
                <h2 className="text">Get started with your application</h2>
                <div className ='test-holder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br></br>
                    ullamcorper mattis, pulvinar dapibus leo.</div>
                <div className='email-textHolder'>
                    EMAIL ADDRESS
                </div>
                <div>
                    <form>
                        <input type ='text' id='proceed' name='fproceed'/>
                    </form>
                </div>
                <div className="divbutton">
                    <button className='button'>Proceed</button>
                </div>
            </div>
        </div>

    );
}

export default StartCenteredDiv;