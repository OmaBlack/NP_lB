import React from "react";
import '../component/SecondPageCentered.css'



 const SecondPageCentered = () => {
    return(
        <div>
            <div className="wrapper2">
                <h2>Get an instant loan to fund your facility today!</h2>
                <div className ='test-Holder2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br></br>
                    ullamcorper mattis, pulvinar dapibus leo.</div>
                <div className="doubleDiv">
                    <div className="facilityH">facility/hospital name</div>
                    <div className="facility-type">type of facility</div>
                </div>
                <div className="doubleInput">
                    <div className="doubleIn">
                        <form>
                            <input type='text' id="fac" name='facility'/>
                        </form>
                    </div>
                    <div className="doubleInp">
                        <form>
                            <input type="text" id="fac-type" name='hospital-Type'/>
                        </form>
                    </div>
                </div>
                <div className="address">address</div>
                <div className="Address-field">
                    <form>
                        <input type='text' id='add' name='addBar'/>
                    </form>
                </div>
                <div className="region">
                    <div className="country">country</div>
                    <div className="state">state</div>
                    <div className="city">city</div>
                </div>
                <div className="region-inp">
                    <div className="country-inp">
                        <form>
                            <input type='text' id='for-country' name ='country'/>
                        </form>
                    </div>
                    <div className="state-inp">
                        <form>
                            <input type='text' id='for-state'name='state'/>
                        </form>
                    </div>
                    <div className="city-inp">
                        <form>
                            <input type='text' id='for-city' name='city'/>
                        </form>
                    </div>
                </div>
                <div className="Nex-Prev">
                    <button className="prev">previous</button>
                    <button className="next">next</button>
                </div>
            </div>
        </div>
    )
}
export default SecondPageCentered;