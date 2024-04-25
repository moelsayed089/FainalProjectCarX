import React, { useState } from "react";
import "./Register.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { validationSchemaRegister } from "../../validation";
import CarField from "../../ui/CarField";

export default function Register() {
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const carOptionsOne =[
  
    { value: "GOLF", label: "GOLF" },
    { value: "Verna", label: "Verna" },
    { value: "Cerato", label: "Cerato" }
  ]



  const carOptionsTwo = [

    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "hatchback", label: "Hatchback" }
  ]

  async function registerNewUser(values, { resetForm }) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/register",
        values
      );
  

      if (data.message === "User registered successfully.") {
        toast.success("Account has created successfully", {
          position: "bottom-right",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      let errorRes = error.response.data.data.email.join();
      toast.error(errorRes, {
        position: "bottom-right",
      });
    }
    setIsLoading(false);
    resetForm();
  }

  const formObject = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      car: "",
      car2:""
    },
    onSubmit: registerNewUser,
    validate: validationSchemaRegister
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

              <InputField label={"Name"}
                className={"lableRes"}
                value={formObject.values.name}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="name"
                type="text"
                placeholder="Enter Your Name "
                error={formObject.touched.name && formObject.errors.name}
              />
              {/* ======================= */}
              <InputField label={"Email"}
                className={"lableRes"}
                value={formObject.values.email}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="email"
                type="text"
                placeholder="Enter Your Email "
                error={formObject.touched.email && formObject.errors.email}
              />

              {/* ======================= */}
              <InputField label={"Phone"}
                className={"lableRes"}
                value={formObject.values.phone}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="phone"
                type="text"
                placeholder="Enter Your Phone  "
                error={formObject.touched.phone && formObject.errors.phone}
              />

              {/* ======================= */}
              <InputField label={"Password"}
                className={"lableRes"}
                value={formObject.values.password}
                onBlur={formObject.handleBlur}
                onChange={formObject.handleChange}
                id="password"
                type="password"
                placeholder="Enter Your Password   "
                error={formObject.touched.password && formObject.errors.password}
              />

              <div className="mb-2 row mt-3">
                <div className="col-lg-6">
                  <CarField
                    name="car"
                    id="car"
                    value={formObject.values.car}
                    onBlur={formObject.handleBlur}
                    onChange={formObject.handleChange}
                    options={carOptionsOne}
                    error={formObject.errors.car && formObject.touched.car ? formObject.errors.car : ""}
                  />
                </div>

                <div className="col-lg-6">
                  <CarField
                    name="car2"
                    id="car2"
                    value={formObject.values.car2}
                    onBlur={formObject.handleBlur}
                    onChange={formObject.handleChange}
                    options={carOptionsTwo}
                    error={formObject.errors.car2 && formObject.touched.car2 ? formObject.errors.car2 : ""}
                  />
              </div>
              </div>
              <Button type={'submit'} disable={formObject.isValid === false || formObject.dirty === false} 
              label={isLoading ? <Loading /> : "Sign Up"} color={'btnColor'} width={'w-100'} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

