import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";
import "./Feedback.css";
import TextareaField from "../../ui/TextareaField";
import Loading from "../../ui/Loading";
import { validateFormFeedback } from "../../validation";
import "./Feedback.css";
import Button from "../../ui/Button";

import axios from 'axios'

export const Feedback = () => {


    const { userData } = useContext(authContext);
    const [isLoading, setIsLoading] = useState(null);

    // Handel Fuction For sumbitFeedback 
    async function sumbitFeedback(values, { resetForm }) {
        setIsLoading(true);
        try {
            const userId = userData?.id ?? '';
            const { data } = await axios.post("http://127.0.0.1:8000/api/feedback", { ...values, userId });
            if (data.status === 200) {
                toast.success("Thanks for you , feedback sumbit", {
                    position: "bottom-center",
                });
            }
        } catch (error) {
            toast.error(error.message);
        }
        setIsLoading(false);
        resetForm();
    }

    // Handel validateFormFeedback 
    const formObject = useFormik({
        initialValues: {
            userId: userData?.id ?? "",
            description: "",
        },
        onSubmit: sumbitFeedback,
        validate: validateFormFeedback
    });

    return (
        <>
            <main className="feedback ">
                <div className="main-text mt-5">
                    <h1 className="text-center position-relative">Feedback</h1>
                </div>
                <div className="d-flex justify-content-center ">
                    <div className="text-center col-lg-6  text-muted p-2" >
                        <p className="about-span-header">
                            Users can provide feedback and ratings on diagnostic results, expert recommendations, and community contributions, fostering transparency and accountability within the platform.
                        </p>
                    </div>
                </div>
                <div className="container col-lg-6">
                    <form onSubmit={formObject.handleSubmit}>
                        <TextareaField
                            className={"lableRes"}
                            value={formObject.values.description}
                            onBlur={formObject.handleBlur}
                            onChange={formObject.handleChange}
                            id={"description"}
                            type={"text"}
                            placeholder={"Enter Your feedback"}
                            rows={13}
                            cols={10}
                            error={formObject.touched.description && formObject.errors.description}
                        />
                        {userData && userData?.token ? <Button type={'submit'} label={isLoading ? <Loading /> : "Submit"} 
                        color={'btnColor'} width={'w-100'} />
                            :
                            <Link to={"/login"} className="btn btnColor py-3 px-4 mb-5 shadow-none w-100">
                                Submit
                            </Link>
                        }
                    </form>
                </div>
            </main>
        </>
    );
};
