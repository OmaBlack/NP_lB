import React from "react";
import '../component/ThirdPageDiv.css';




const ThirdPageDiv = () => {


    return(
        <div>
            <div className="container">
                <h2>Additional Information</h2>
                <div className="small-text">We couldn’t find any data to assess your credit score based on your history with our affiliates such as LifeBank.</div>
                <div className="com-Reg">
                    <div className="companyReg">company registration number</div>
                    <div className="cac">upload cac certificate</div>
                </div>
                <div className='cace-upload'>
                    <div className="Reg">
                        <form>
                            <input type='text' placeholder="company reg. no here" id="registr"name='registration'/>
                        </form>
                    </div>
                    <div className="cert">
                        <form>
                            <input type= 'text' placeholder="upload your certificate here" id="certi" name='cac-doc'/>
                        </form>
                    </div>
                </div>
                <div className="ba-verify">
                    <div className="bank-number">bank verification number</div>
                    <div className="statement">upload bank statement</div>
                </div>
                <div className="num-state">
                    <div className="number"></div>
                    <div className=""></div>
                </div>
                <div className="div-cover">
                    <div className="verification">
                        <form>
                            <input type='text' id='bank-veri' name='veri'/>
                        </form>
                    </div>
                    <div className="up-load">
                        <form>
                            <input type='text' id='ba-nk' name='ba-state'/>
                        </form>
                    </div>
                </div>
                <div className='check2'>
                    <form className="check1">
                        <input type='checkbox' id='check' name='box-check'/>
                        I agree to terms and conditions
                    </form>
                </div>
                <div className="ba-fro">
                    <button className="back" placeholder="">
                        previous
                    </button>
                    <button className="front">
                        next
                    </button>
                </div>
            </div>

        </div>

    )     
};

export default ThirdPageDiv