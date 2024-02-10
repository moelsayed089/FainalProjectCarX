import { useFormik } from 'formik';
import './Feedback.css'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { authContext } from '../../Context/AuthProvider';
import './Feedback.css'
export const Feedback = () => {



    const { token } = useContext(authContext)



    const [isLoading, setIsLoading] = useState(null);






    const [errorMessage, setErrorMessage] = useState(null);


    async function sumbitFeedback(values, { resetForm }) {
        setIsLoading(true);
        setErrorMessage(null);

        try {
            const { data } = await axios.post(
                "http://127.0.0.1:8000/api/feedback",
                values
            );

            if (data.message === "Feedback created successfull") {
                // setSuccessMessage('Account has created successfully')
                toast.success("Thanks for you , feedback sumbit", {
                    position: "bottom-center",
                });
            }
        } catch (error) {
            toast.error(error);
        }

        setIsLoading(false);

        resetForm();
    }

    const formObject = useFormik({
        initialValues: {
            name: "",
            description: "",
        },

        onSubmit: sumbitFeedback,

        validate: (values) => {
            setErrorMessage(null);

            const errors = {};
            if (values.name.length < 5) {
                errors.name = "Name or Username must be form 5 characters";
            }
            if (values.description === "") {
                errors.description = "This feild is required !";
            }

            return errors;
        },
    });
    return (
        <>
            <main className="feedback ">
                <div className="main-text py-5">
                    <h1 className=" text-center position-relative">Feedback</h1>
                </div>
                <div className="container col-lg-6">
                    <form onSubmit={formObject.handleSubmit}>
                        <label className="lableRes" htmlFor="name">
                            Username:
                        </label>
                        <input
                            value={formObject.values.name}
                            onBlur={formObject.handleBlur}
                            onChange={formObject.handleChange}
                            id="name"
                            type="text"
                            className="  form-control shadow-none mb-2 py-2 inputRes"
                            placeholder="Enter your name or username "
                        />
                        {formObject.errors.name && formObject.touched.name ? (
                            <div className=" alert  alert-danger">
                                {formObject.errors.name}
                            </div>
                        ) : (
                            ""
                        )}

                        <label
                            className="lableRes mt-2"
                            htmlFor="description">
                            Feedback:
                        </label>
                        <textarea
                            value={formObject.values.description}
                            onBlur={formObject.handleBlur}
                            onChange={formObject.handleChange}
                            id="description"
                            type="text"
                            className="form-control shadow-none mb-3 py-2 inputRes"
                            placeholder="Enter Your feedback "
                            rows={10}
                            cols={10}
                            
                        />
                        {formObject.errors.description &&
                            formObject.touched.description ? (
                            <div className=" alert  alert-danger">
                                {formObject.errors.description}
                            </div>
                        ) : (
                            ""
                        )}

                        {token ? (
                            <button
                                type="submit"
                                className="btn btnColor py-3 px-4 mb-5 shadow-none w-100"
                            >
                                {isLoading ? (
                                    <div className=" d-flex justify-content-center">
                                        <Bars
                                            height="20"
                                            width="60"
                                            color="#fff"
                                            ariaLabel="bars-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    </div>
                                ) : (
                                    "Sumbit"
                                )}
                            </button>
                        ) : (
                            <Link
                                to={'/login'}
                                className="btn btnColor py-3 px-4 mb-5 shadow-none w-100">
                                submit
                            </Link>
                        )}
                    </form>
                </div>
            </main>
        </>
    );
}
