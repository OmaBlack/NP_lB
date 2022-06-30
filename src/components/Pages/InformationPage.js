import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./InformationPage.css";

const SecondPageCentered = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      hospitalName: "",
      address: "",
      typeOfFacility: "",
    },
    validationSchema: Yup.object({
      hospitalName: Yup.string()
        .min(3, "Must not be less than 3")
        .required("Required"),
      typeOfFacility: Yup.string("Please choose a facility").required(
        "Required"
      ),
      address: Yup.string()
        .min(5, "Please insert a valid address")
        .required("Required"),
    }),
    onSubmit: (values) => {
      navigate("/additionalInformation");
    },
  });
  return (
    <div>
      <div className="wrapper2">
        <h2>Get an instant loan to fund your facility today!</h2>
        <div className="test-Holder2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec <br></br>
          ullamcorper mattis, pulvinar dapibus leo.
        </div>

        <div className="doubleDiv">
          <div className="facilityH">facility/hospital name</div>
          <div className="facility-type">type of facility</div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="doubleInput">
            <div className="doubleIn">
              {formik.touched.hospitalName && formik.errors.hospitalName ? (
                <p className="formik_error">{formik.errors.hospitalName}</p>
              ) : null}

              <input
                type="text"
                id="fac"
                name="hospitalName"
                placeholder="Hospital Name"
                onChange={formik.handleChange}
                value={formik.values.hospitalName}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="doubleInp">
              {formik.touched.typeOfFacility && formik.errors.typeOfFacility ? (
                <p className="formik_error">{formik.errors.typeOfFacility} </p>
              ) : null}

              <input
                type="text"
                id="fac-type"
                name="typeOfFacility"
                placeholder="Facility Type"
                onChange={formik.handleChange}
                value={formik.values.typeOfFacility}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="address">address</div>
          <div className="Address-field">
            {formik.touched.address && formik.errors.address ? (
              <p className="formik_error">{formik.errors.address}</p>
            ) : null}

            <input
              type="text"
              id="add"
              name="address"
              placeholder="address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="region">
            <div className="country">country</div>
            <div className="state">state</div>
            <div className="city">city</div>
          </div>

            <div className="region-inp">
                <div className="country-inp">
                    <input type="text" id="for-country" name="country" />
                </div>

                <div className="state-inp">
                    <input type="text" id="for-state" name="state" />
                </div>

                <div className="city-inp">
                    <input type="text" id="for-city" name="city" />
                </div>
            </div>
          <div className="Nex-Prev">
            <Link to="/">
              <button className="prev">previous</button>
            </Link>

            <button
              className="next"
              type="submit"
              onSubmit={formik.handleSubmit}
            >
              next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SecondPageCentered;
