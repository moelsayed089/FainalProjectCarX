import "./Service.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../ui/Loading";
import { useFormik } from "formik";
import { validationSchema, validationSchemaLocation } from "../../validation";
import SelectField from "../../ui/SelectField ";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authContext } from "../../Context/AuthProvider";
import InputField from "../../ui/InputField";
import toast from "react-hot-toast";



export default function Service() {
  const { userData  } = useContext(authContext)
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataFromModal, setDataFromModal] = useState('');
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);
  const [options4, setOptions4] = useState([]);


  const formik = useFormik({
    initialValues: {
      Part: '',
      Subcategory: '',
      Subpart: '',
      Impact: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });

  useEffect(() => {
    AOS.init({
      disable: 'mobile'
    });
  }, [])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/get_data")
      .then((response) => {
        const uniqueParts = [...new Set(response.data?.data.map((item) => item.Part))];
        setOptions1(uniqueParts);
      })
      .catch((error) => {
        console.error("Error fetching options for dropdown 1:", error);
      });
  }, []);

  useEffect(() => {
    if (formik.values.Part) {
      axios
        .get(`http://127.0.0.1:5000/get_data?part=${formik.values.Part}`)
        .then((response) => {
          const uniqueSubcategory = [
            ...new Set(response.data?.data.map((item) => item.Subcategory)),
          ];
          setOptions2(uniqueSubcategory);
        })
        .catch((error) => {
          console.error("Error fetching options for dropdown 2:", error);
        });
    }
  }, [formik.values.Part]);

  useEffect(() => {
    if (formik.values.Subcategory) {
      axios
        .get(
          `http://127.0.0.1:5000/get_data?subcategory=${formik.values.Subcategory}`
        )
        .then((response) => {
          const uniqueSubpart = [
            ...new Set(response.data?.data.map((item) => item.Subpart)),
          ];
          setOptions3(uniqueSubpart);
        })
        .catch((error) => {
          console.error("Error fetching options for dropdown 3:", error);
        });
    }
  }, [formik.values.Subcategory]);

  useEffect(() => {
    if (formik.values.Subpart) {
      axios
        .get(
          `http://127.0.0.1:5000/get_data?part=${formik.values.Part}&subcategory=${formik.values.Subcategory}&subpart=${formik.values.Subpart}`
        )
        .then((response) => {
          const uniqueImpact = [
            ...new Set(response.data?.data.map((item) => item.Impact)),
          ];
          setOptions4(uniqueImpact);
        })
        .catch((error) => {
          console.error("Error fetching options for dropdown 4:", error);
        });
    }
  }, [formik.values.Subpart, formik.values.Part, formik.values.Subcategory]);

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .post(
        "http://127.0.0.1:5000/predict_problem_description_and_cost",
        formik.values
      )
      .then((response) => {
        const values = formik.values;
        if (!values.Part || !values.Subpart || !values.Subcategory || !values.Impact) {
          console.log("Not all data is provided");
          return;
        }
        setDataFromModal(response.data);
        setDescription(response.data.description);
        setCost(response.data.cost);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      })
      .finally(() => {
        setIsLoading(false);
        
      });
   
  };
// --------------------------------------------------------
  const formObject = useFormik({
    initialValues: {
      location: "",
    },
    validate: validationSchemaLocation,
     onSubmit: () => {
       saveHanhel();
    },
  });


  const saveHanhel = () => {
    const userId = userData?.id ?? '';
    const location = formObject.values.location
    setIsLoading(true);
    axios
      .post(
        "http://127.0.0.1:8000/api/submit",
        { ...dataFromModal, location , userId }
      )
      .then((response) => {
        if (response.data.message === "Submit created successfully"){
          toast.success("Problem has submited successfully", {
            position: "bottom-right",
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // console.log("Data From Modaal Is Sending.."); 
};

  return (
    <>
      <main>
        <div className="service_header mt-2">
          <div className="main-text ">
            <h1 className=" text-center position-relative" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="400">Service AI.</h1>
          </div>
          <div className="d-flex justify-content-center ">
            <div className="text-center col-lg-6 text-muted p-2" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="400">
              <p>
                Predict Car Problems <span className="service_span">using AI and Expert Systems</span> is a sophisticated web application designed to assist car owners and enthusiasts in diagnosing and predicting potential issues with their vehicles. Leveraging the power of artificial intelligence and expert systems, our platform offers users a comprehensive toolset to analyze various factors such as vehicle symptoms, and environmental conditions to <span className="service_span">accurately predict potential problems.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container service_select">
          <div className="row align-items-center">
            <div className="col-12">
              <form onSubmit={formik.handleSubmit}>

                <SelectField name={"Part"} value={formik.values.Part} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                  options={options1}
                  error={formik.touched.Part && formik.errors.Part}
                  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="450"
                />

                {/* ------------------------------------------------------- */}
                <SelectField name={"Subcategory"} value={formik.values.Subcategory} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  options={options2}
                  error={formik.touched.Subcategory && formik.errors.Subcategory}
                  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="450"
                />

                {/* ------------------------------------------------------- */}

                <SelectField name={"Subpart"} value={formik.values.Subpart} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  options={options3}
                  error={formik.touched.Subpart && formik.errors.Subpart}
                  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="450"
                />

                {/* ------------------------------------------------------- */}

                <SelectField name={"Impact"} value={formik.values.Impact} onChange={formik.handleChange} onBlur={formik.handleBlur}
                  options={options4}
                  error={formik.touched.Impact && formik.errors.Impact}
                  data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="450"
                />

                <button
                  type="submit"
                  className="form-control shadow-none btn_service py-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                  disabled={!formik.isValid || !Object.keys(formik.touched).length}
                  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="450"
                >
                  {isLoading ? <Loading /> : "Predict Problem"}
                </button>
              </form>
            </div>
          </div>
        </div>
{/* modal ai */}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {isLoading && dataFromModal === '' ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <div>
                        <Loading />
                      </div>
                      <div>
                        <h5>Predict is Loading ...</h5>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4">
                     {!isLoading ? <>
                          <div className="modal_descraption">
                            <h6> Descraption: <span className="text-muted">{description}</span></h6>
                          </div>
                          <div className="modal_descraption">
                            <h6> Cost: <span className="text-muted">{cost}</span></h6>
                          </div>
                          
                     </> : ""}
                    </div>
                  )}

                  <div>
                  
                    <InputField label={"Please enter the location to help us contact you faster*"}
                      value={formObject.values.location}
                      onBlur={formObject.handleBlur}
                      onChange={formObject.handleChange}
                      id="location"
                      type="text"
                      placeholder={"Enter your Location ex::https://maps.app.googl/  "}
                      error={formObject.touched.location && formObject.errors.location}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    disabled={ (formObject.touched.location && formObject.errors.location)}
                  onClick={saveHanhel}>Submit Problem</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
