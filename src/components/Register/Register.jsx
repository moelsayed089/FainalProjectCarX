import React, { useState } from 'react'
import './Register.css'
import { useFormik } from 'formik'
import { Bars } from 'react-loader-spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function Register() {
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  // const [successMessage, setSuccessMessage] = useState(null);

  async function registerNewUser(values, { resetForm }) {
    setIsLoading(true);
    setErrorMessage(null);
    console.log(values)

    // console.log('sending..........');

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/register",
        values
      );
      console.log(data.data)
      console.log(data.message)
      console.log(data.data.token)
      console.log(data.data.name)
      console.log(data.data.email)

      if (data.message === "User register successfully.") {
        // setSuccessMessage('Account has created successfully')
        toast.success("Account has created successfully", {
          position: "bottom-center",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      let errorRes = error.response.data.data.email.join()
      // console.log(error)
      // console.log(errorRes);
      // setErrorMessage(errorRes)
      toast.error(errorRes, {
        position: "bottom-center",
      });
    }

    setIsLoading(false);
    // resetForm();
  }

  const formObject = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      car: "",
    },

    onSubmit: registerNewUser,

    validate: (values) => {
      setErrorMessage(null);

      const errors = {};
      if (values.name.length < 5) {
        errors.name = "Name must be form 5 characters";
      }

      if (
        values.email.includes("@") === false || values.email.includes(".") === false
      ) {
        errors.email = "Email not valid must be contain (@) and (.)";
      }

      if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) {
        errors.phone = "Phon not valid";
      }

      if (values.password.length < 7 || values.password.length > 15) {
        errors.password = "Password must be form 7 characters to 15 characters";
      }

      if (values.car.length < 3) {
        errors.car = "Type of car not valid";
      }
      return errors;
    },
  });

  return (
    <>
      <div className="register mt-3">
        <div className="container">
          <div className="reg-text">
            <h1>
              Hello! <span className="sign-up">Sign UP</span>
              <br />
              To Get Start
            </h1>
          </div>

          <div className="mt-3 position-relative ">
            <div className="regImg  position-absolute ">
              <img
                src={require("../../assests/Infographics_ Icons/mechanic.png")}
                className="w-100"
                alt=""
              />
            </div>

            <form onSubmit={formObject.handleSubmit}>
              <label className="lableRes" htmlFor="name">
                Name :
              </label>
              <input
                value={formObject.values.name}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="name"
                type="text"
                className="  form-control shadow-none mb-3 py-2 inputRes"
                placeholder="Enter Your Name "
              />
              {formObject.errors.name && formObject.touched.name ? (
                <div className=" alert  alert-danger">
                  {formObject.errors.name}
                </div>
              ) : (
                ""
              )}

              <label className="lableRes" htmlFor="email">
                Email :
              </label>
              <input
                value={formObject.values.email}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="email"
                type="email"
                className="form-control shadow-none mb-3 py-2 inputRes"
                placeholder="Enter Your Email "
              />
              {formObject.errors.email && formObject.touched.email ? (
                <div className=" alert  alert-danger">
                  {formObject.errors.email}
                </div>
              ) : (
                ""
              )}

              <label className="lableRes" htmlFor="phone">
                Phone :
              </label>
              <input
                value={formObject.values.phone}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="phone"
                type="tel"
                className="form-control shadow-none mb-3 py-2 inputRes"
                placeholder="Enter Your Phone "
              />
              {formObject.errors.phone && formObject.touched.phone ? (
                <div className=" alert alert-danger">
                  {formObject.errors.phone}
                </div>
              ) : (
                ""
              )}

              <label className="lableRes" htmlFor="password">
                Password :
              </label>
              <input
                value={formObject.values.password}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="password"
                type="password"
                className="form-control shadow-none mb-3 py-2 inputRes"
                placeholder="Enter Your Password "
              />
              {formObject.errors.password && formObject.touched.password ? (
                <div className=" alert  alert-danger">
                  {formObject.errors.password}
                </div>
              ) : (
                ""
              )}

              <label className="lableRes" htmlFor="car">
                Type Of Car :
              </label>
              <input
                value={formObject.values.car}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="car"
                type="text"
                className="form-control shadow-none mb-3 py-2 inputRes"
                placeholder="Enter Your Type Of Car "
              />
              {formObject.errors.car && formObject.touched.car ? (
                <div className=" alert  alert-danger">
                  {formObject.errors.car}
                </div>
              ) : (
                ""
              )}

              {errorMessage ? (
                <div className=" alert alert-danger">{errorMessage}</div>
              ) : (
                ""
              )}


              {/* {successMessage ? (
                <div className=" alert  alert-success">{successMessage}</div>
              ) : (
                ""
              )} */}

              <button
                disabled={
                  formObject.isValid === false || formObject.dirty === false
                }
                type="submit"
                className="btn btnColor py-3 px-4 mb-5 shadow-none w-100"
              >
                {isLoading ? (
                  <div className=" d-flex justify-content-center">
                    <Bars
                      height="30"
                      width="60"
                      color="#fff"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
