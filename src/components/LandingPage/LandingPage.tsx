import React from 'react';
import Header from '../LandingPage/container/Header/Header';
import First from './container/First/First';
import Second from './container/Second/Second';
import Third from './container/Third/Third';
import Fourth from './container/Fourth/Fourth';
import Partners from './container/Partners/Partners';
import Payment from './container/Payment/Payment';
import FAQ from './container/FAQs/FAQ';
import Footer from './container/Footer/Footer';
import LandingPageStyles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={LandingPageStyles.wrapper}>
        <Header />
        <First />
        <Second />
        <Third />
        <Fourth />
        <Partners />
        <Payment />
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage;