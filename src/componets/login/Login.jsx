import React from "react";
import style from './Login.module.css';
import loginImg from "../../images/Rectangle13.svg"
import LogSignComp from "../loginSignup/LogSignComp";

const Login=()=>{

    return(

        <div className={style.login_container}>
            <div className={style.login_image}>
                <img src={loginImg} alt="login pic" />
            </div>
            <div className={style.login_main}>
                
                <LogSignComp info = "Login to your account"/>
                
                
                <p className={style.loginDescription}>Kindly provide the follwing details  to continue</p>
                <div className={style.mainLoginForm}>
                    <form action="">
                        <div className={style.formGroup}>
                            <label html for="email">EMAIL ADDRESS</label>
                            <input type="email" name="" id="" placeholder="admin@faithcityhealth.com"/>
                        </div>
                        <div className={style.formGroup}>
                            <label html for="password">PASSWORD</label>
                            <input type="password" name="" id="" placeholder=".........."/>
                            
                        </div>
                        <div className={style.formGroup}>
                            <button>Login</button>
                        </div>

                    </form>
                    <div className={style.loginBottom}>
                    <p className={style.signupLink}>Don't have an account ? <span>Register</span></p>
                    <p className={style.trademark}>© 2021 Nerve Inc. All Rights Reserved.®</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;