import React from 'react'
import FooterStyles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={FooterStyles.footercontainer}>
        <div className={FooterStyles.footone}>
            <div className={FooterStyles.foot1}>
                <h1>Company</h1>
                <p>What we do</p>
                <p>How It Works</p>
                <p>Why It Matters</p>
                <p>Our Story</p>
                <p>FAQs</p>
            </div>

            <div className={FooterStyles.foot2}>
                <h1>Products</h1>
                <p>Instant Loans</p>
                <p>Credit Calculation</p>
                <p>Project Sponsorship</p>
            </div>

            <div className={FooterStyles.foot3}>
                <h1>Resources</h1>
                <p>Contact Us</p>
                <p>Community</p>
            </div>

            <div className={FooterStyles.foot4}>
                <h1>Legal</h1>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Policy</p>
            </div>

            <div className={FooterStyles.foot5}>
                <h1>Support</h1>
                <p>+234 732 2435 72</p>
                <p>info@nerve.com.ng</p>
            </div>
        </div>

        <div className={FooterStyles.foot6}>
            <p>© 2021 Nerve Inc. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;