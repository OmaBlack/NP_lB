import React from 'react'
import HeaderStyles from './Header.module.css';
import { Link } from "react-router-dom";
import { Images } from '../../../ComponentImages';

const Header = () => {
  return (
      <nav className={HeaderStyles.header}>
           <div className={HeaderStyles.nerve_logo}>
                <div className={HeaderStyles.logo_image}>
                    <img src={Images.flogo} alt='nerve logo'/>
                </div>
            </div>
            <div className={HeaderStyles.nav_list}>
                    <ul className={HeaderStyles.nav_ul}>
                        <li><Link to="#">How It Works</Link></li>
                        <li><Link to="#">Partners</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                        <button><span className={HeaderStyles.span}>Get a loan today!</span></button>
                    </ul>
            </div>     
      </nav>
  )
}

export default Header;