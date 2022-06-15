import React from 'react'
import HeaderStyles from './Header.module.css'
import { Images } from '../../../ComponentImages';

const Header = () => {
  return (
      <nav className={HeaderStyles.header}>
           <div className={HeaderStyles.nerve_logo}>
                <div className={HeaderStyles.logo_image}>
                    <img src={Images.flogo} alt=''/>
                </div>
            </div>
            <div className={HeaderStyles.nav_list}>
                    <ul className={HeaderStyles.nav_ul}>
                        <li>How It Works</li>
                        <li>Partners</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <button><span className={HeaderStyles.span}>Get a loan today!</span></button>
                    </ul>
            </div>     
      </nav>
  )
}

export default Header;