import React from "react";
import style from './signup.module.css';
import loginImg from "../../images/Rectangle12.svg"
import LogSignComp from "../../componets/loginSignup/LogSignComp";

const Signup=()=>{

    return(

        <div className={style.login_container}>
            <div className={style.login_image}>
                <img src={loginImg} alt="login pic" />
            </div>
            <div className={style.login_main}>
                
                <LogSignComp info = "Create an Account"/>
                
                
                <p className={style.loginDescription}>Kindly provide the follwing details  to continue</p>
                <div className={style.mainLoginForm}>
                    <form action="">
                        <div className={style.formGroup}>
                            <label html for="email">EMAIL ADDRESS</label>
                            <input className={style.gray}type="email" name="" id="" placeholder="admin@faithcityhealth.com"/>
                        </div>
                        <div className={style.formGroup}>
                            <label html for="password">PASSWORD</label>
                            <input className={style.password} type="password" name="" id="" placeholder="••••••••"/>
                            
                        </div>
                        <div className={style.formGroup}>
                            <label html for="password">RE-TYPE PASSWORD</label>
                            <input className={style.password} type="password" name="" id="" placeholder="••••••••"/>
                        </div>
                        <div className={style.formGroup}>
                            <button>Create Account</button>
                        </div>

                    </form>
                    <div className={style.loginBottom}>
                    <p className={style.signupLink}>Already have an account? <span>Login</span></p>
                    <p className={style.trademark}>© 2021 Nerve Inc. All Rights Reserved.®</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;