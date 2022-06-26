import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./FinancialPage.css";

const ThirdPageDiv = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      registration: "",
      bankVerificationNumber: "",
      termsAndConditions: true,
    },

    validationSchema: Yup.object({
      registration: Yup.string()
        .max(11, "Must not be more than 11")
        .required("Required"),

      bankVerificationNumber: Yup.string()
        .min(11, " Number should not be less than 11 digits")
        .required("Please insert a number"),

      termsAndConditions: Yup.bool().oneOf([false], "Accept Terms is required"),
    }),
    onSubmit: (values) => {
      navigate("/calculateCredit");
    },
  });

  return (
    <div>
        <div className="container">

            <h2>Additional Information</h2>
            <div className="small-text">
              We couldn’t find any data to assess your credit score based on your
              history with our affiliates such as LifeBank.
            </div>

            <div className="com-Reg">
                <div className="companyReg">company registration number</div>
                <div className="cac">upload cac certificate</div>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="cace-upload">
                    <div className="Reg">
                        {formik.touched.registration && formik.errors.registration ? (
                        <p className="formik_error">{formik.errors.registration} </p>
                        ) : null}

                        
                        <input
                            type="number"
                            placeholder="company reg. no here"
                            id="registr"
                            name="registration"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.registration}
                        />
                        
                    </div>

                    <div className="cert">
                    
                        <input
                        type="text"
                        placeholder="upload your certificate here"
                        id="certi"
                        name="cert"
                        />
                    
                    </div>
                </div>

                <div className="ba-verify">
                    <div className="bank-number">bank verification number</div>
                    <div className="statement">upload bank statement</div>
                </div>

                <div className="num-state">
                    <div className="number"></div>
                    <div className=""></div>
                </div>

                <div className="div-cover">

                    <div className="verification">
                        {formik.touched.bankVerificationNumber &&
                        formik.errors.bankVerificationNumber ? (
                        <p className="formik_error">
                        {formik.errors.bankVerificationNumber}
                        </p>
                        ) : null}

                        
                        <input
                            type="number"
                            id="bank-veri"
                            name="bankVerificationNumber"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.bankVerificationNumber}
                        />
                       
                    </div>
                    <div className="up-load">
                        
                        <input type="text" id="ba-nk" name="ba-state" />
                        
                    </div>

                </div>

                <div className="check2">

                    {formik.touched.termsAndConditions &&
                    formik.errors.termsAndConditions ? (
                    <p className="formik_error">{formik.errors.termsAndConditions}</p>
                    ) : null}

                    <p className="check1">
                        <input
                            type="checkbox"
                            id="check"
                            name="box-check"
                            onChange={formik.handleChange}
                            value={formik.values.termsAndConditions}
                        />
                        I agree to terms and conditions
                    </p>
                  
                </div>

                <div className="ba-fro">
                    <Link to="/getInstanceLoan">
                    <button className="back" placeholder="previous">
                    previous
                    </button>
                    </Link>

                    <button className="front" onSubmit={formik.handleSubmit}>next</button>
                </div>
            </form>
        </div>
    </div>
  );
};


export default ThirdPageDiv;
