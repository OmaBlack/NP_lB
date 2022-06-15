import React from 'react';
import Header from '../LandingPage/container/Header/Header';
import Background from './container/Background/Background';
import Finance from './container/Finance/Finance';
import Service from './container/Service/Service';
import Partners from './container/Partners/Partners';
import Payment from './container/Payment/Payment';
import FAQ from './container/FAQs/FAQ';
import Footer from './container/Footer/Footer';
import LandingPageStyles from './LandingPage.module.css';
import Facility from './container/Facility/Facility';

function LandingPage() {
  return (
    <div className={LandingPageStyles.wrapper}>
        <Header />
        <Background />
        <Finance />
        <Facility />
        <Service />
        <Partners />
        <Payment />
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage;