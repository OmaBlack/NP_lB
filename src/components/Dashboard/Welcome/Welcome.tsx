import React from "react";
import styles from "./Welcome.module.css";
import { Images } from "../../ComponentImages";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h2>Welcome,</h2>
          <p>You’re doing a great job saving lives today!</p>
        </div>
        <button className={styles.action}>
          <span>Quick Action</span>
          <img src={Images.warrowdown} alt="a white arrow" />
        </button>
      </div>

      <div className={styles.box}>
        <div className={styles.part1}>
          <div className={styles.trend}>
            <h2>Credit Limit Trend</h2>
            <img src={Images.line} alt="a straight line" />

            <div className={styles.box2}>
              <div className={styles.progress}>
                <div className={styles.cover}>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner1}></div>
                  </div>
                  <span>JUL</span>
                </div>
                <div className={styles.cover}>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner2}></div>
                  </div>
                  <span>AUG</span>
                </div>

                <div className={styles.cover}>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner3}></div>
                  </div>
                  <span>SEP</span>
                </div>
                <div className={styles.cover}>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner4}></div>
                  </div>
                  <span>OCT</span>
                </div>
                <div className={styles.cover}>
                  <div className={styles.progressbar}>
                    <div className={styles.progressbar_inner5}></div>
                  </div>
                  <span>NOV</span>
                </div>
              </div>

              <div></div>
              <div className={styles.estimate}>
                <div className={styles.digit}>
                  <div className={styles.figure}>
                    <p>₦163,467.13</p>
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
                <img src={Images.line} alt="a straight line" />
                <div className={styles.digit2}>
                  <div className={styles.figure2}>
                    <p>₦738,489.34</p>
                  </div>
                  <div className={styles.figure2p}>
                    <p>Available Credit Limit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.score}>
            <div className={styles.creditbar}>
              <div className={styles.creditbar_inner}></div>
            </div>

            <div className={styles.scoreBoard}>
              <h1>
                <span className={styles.innera}>C</span>
              </h1>
              <h2>
                <span className={styles.sco}>CREDIT SCORE</span>
              </h2>
              <h5>
                <span className={styles.good}>Looking Good!</span>
              </h5>
              <p>
                <Link to="#" className={styles.improve}>
                  Learn how to improve your score
                </Link>
              </p>
              <button>
                <Link to="#" className={styles.new}>
                  Make New Payment With Nerve
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.part2}>
          <div className={styles.payment}>
            <h2>Recurring/Upcoming payments</h2>
            <h3>-₦545,000.00</h3>
            <img src={Images.line} alt="a straight line" />
            <div className={styles.summary}>
              <h6>₦32,000</h6>
              <h6>12 Oct, 2021</h6>
              <h6 className={styles.overdue}>OVERDUE</h6>
              <h6>₦513,000</h6>
              <h6>01 May, 2021</h6>
              <h6 className={styles.overdue}>OVERDUE</h6>
            </div>
          </div>
          <div className={styles.activity}>
            <h2>Recent Activity</h2>
            <img src={Images.line} alt="a straight line" />
            <div className={styles.empty}>
              <div className={styles.void}></div>
              <div className={styles.empty_list1}></div>
              <div className={styles.empty_img}>
                <img src={Images.sidearrow} alt="" />
              </div>
              <div className={styles.void}></div>
              <div className={styles.empty_list2}></div>
              <div className={styles.empty_img}>
                <img src={Images.sidearrow} alt="" />
              </div>
              <div className={styles.void}></div>
              <div className={styles.empty_list3}></div>
              <div className={styles.empty_img}>
                <img src={Images.sidearrow} alt="" />
              </div>
              <div className={styles.void}></div>
              <div className={styles.empty_list4}></div>
              <div className={styles.empty_img}>
                <img src={Images.sidearrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
