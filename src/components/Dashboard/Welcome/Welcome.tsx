import React from "react";
import styles from "./Welcome.module.css";
import { Images } from "../../ComponentImages";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.side}></div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2>Welcome,</h2>
            <p>You’re doing a great job saving lives today!</p>
          </div>
          <button className={styles.action}>
            <span>Quick Action</span>
            <img src={Images.arrowdown} alt="" />
          </button>
        </div>

        <div className={styles.box}>
          <div className={styles.part1}>
            <div className={styles.trend}>
              <h2>Credit Limit Trend</h2>
              <hr />

              <div className={styles.box2}>
                <div className={styles.progress}>
                  <div className={styles.cover}>
                    <label>JUL</label>
                    <div className={styles.progressbar}>
                      <div className={styles.progressbar_inner}></div>
                    </div>
                    {/* <label>JUL</label> */}
                  </div>
                  <div></div>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner}></div>
                  </div>

                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner}></div>
                  </div>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner}></div>
                  </div>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner}></div>
                  </div>
                </div>

                <div></div>
                <div className={styles.estimate}>
                  <div className={styles.digit}>
                    <div className={styles.figure}>
                      <h1>₦163,467.13</h1>
                      <h6>UNDERUTILIZED</h6>
                    </div>

                    <div className={styles.percent}>
                      <small>
                        4.9%
                        <img src={Images.redarrow} alt="a small red arrow" />
                      </small>
                      <p>THAN PAST MONTH</p>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.digit2}>
                    <div className={styles.figure2}>
                      <h2>₦738,489.34</h2>
                    </div>
                    <div className={styles.figure2p}>
                      <p>Available Credit Limit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.score}>
            <div className={styles.creditbar}>
              <div className={styles.creditbar_inner}></div>
              <h1>C</h1>
              <h2>CREDIT SCORE</h2>
              <h5>Looking Good!</h5>
            </div>

            <p>
              <Link to="#">Learn how to improve your score</Link>
            </p>
            <button>
              <Link to="#">Make New Payment With Nerve</Link>
            </button>
          </div>

          <div className={styles.part2}>
            <div className={styles.payment}>
              <h2>Recurring/Upcoming payments</h2>
              <h2>-₦545,000.00</h2>
              <hr />
              <div className={styles.summary}>
                <h6>₦32,000</h6>
                <h6>12 Oct, 2021</h6>
                <h6>OVERDUE</h6>
                <h6>₦513,000</h6>
                <h6>01 May, 2021</h6>
                <h6>OVERDUE</h6>
              </div>
            </div>
            <div className={styles.activity}>
              <h2>Recent Activity</h2>
              <hr />
              <div className={styles.empty}>
                <div className={styles.void}></div>
                <div className={styles.empty_list}></div>
                <div className={styles.empty_img}>
                  <img src={Images.sidearrow} alt="" />
                </div>
                <div className={styles.void}></div>
                <div className={styles.empty_list}></div>
                <div className={styles.empty_img}>
                  <img src={Images.sidearrow} alt="" />
                </div>
                <div className={styles.void}></div>
                <div className={styles.empty_list}></div>
                <div className={styles.empty_img}>
                  <img src={Images.sidearrow} alt="" />
                </div>
                <div className={styles.void}></div>
                <div className={styles.empty_list}></div>
                <div className={styles.empty_img}>
                  <img src={Images.sidearrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
