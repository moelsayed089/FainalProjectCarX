import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import Cookies from "js-cookie";
import Loading from '../../ui/Loading';
import InputField from '../../ui/InputField';
import Button from '../../ui/Button';
import { validationSchemaLogin } from '../../validation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Login() {
  const [isLoading, setIsLoading] = useState(null)
  const { setToken, setUserData } = useContext(authContext);
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init();
  }, [])

  async function loginUser(values, { resetForm }) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/login",
        values
      );
      if (data.message === "User login successfully.") {
        toast.success("Sign in is Successfull,Wellcome in CAR-X", {
          position: "bottom-right",
        });
      }
      // Save token in cookies
      Cookies.set("token", data.data.token, { expires: 30, secure: true, path: '/' });

      // Save user data in cookies
      Cookies.set("userData", JSON.stringify(data.data), { expires: 30, secure: true, path: '/' });

      // Update state with token and user data
      setToken(data.data.token);
      setUserData(data.data);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      let errorResponse = error.response.data.message;
      console.log(error.response.data.message)
      if (errorResponse === "Unauthorized.") {
        toast.error("Email or Password is not valid", {
          position: "bottom-right",
        });
      }
    }
    setIsLoading(false);
    resetForm()
  }

  let formObject = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: loginUser,
    validate: validationSchemaLogin
  })
  return (
    <>
      <div className="login mt-3">
        <div className="container ">
          <div className="login-about d-flex  justify-content-lg-between align-items-lg-center">
            <div className="text-log" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="750">
              <h1>
                Welcome Back.
                <br />
                <span className="Signin">Sign In</span> Now!
              </h1>
            </div>
            <div className="img-log" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="750">
              <img
                src={require("../../assests/Infographics_ Icons/8227.jpg")}
                className="w-100"
                alt="Infographics"
              />
            </div>
          </div>

          <div className="log-form  ">
            <form onSubmit={formObject.handleSubmit}>
              <InputField label={"Email"}
                value={formObject.values.email}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="email"
                type="text"
                error={formObject.touched.email && formObject.errors.email}
              />
              <InputField label={"Password"}
                value={formObject.values.password}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="password"
                type="password"
                error={formObject.touched.password && formObject.errors.password}
              />
              <Button type={'submit'} disable={formObject.isValid === false || formObject.dirty === false} label={isLoading ? <Loading /> : "Submit"} color={'btnColor'} width={'w-100'} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
