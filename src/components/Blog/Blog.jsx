import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "./Blog.css";
import {Puff } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Blog() {
  const getAllBlog = ({ signal }) => {
    return axios.get("http://127.0.0.1:8000/api/blogs", { signal });
  };
  const { data, isLoading  } = useQuery("allBlog", getAllBlog);


  // console.log("isFetching  " + isFetching);
  // console.log(data?.data.blogs);
  // console.log(error);

  if (isLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#013e6a"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="blog-header  ">
        <div className="main-text py-3">
          <h1 className=" text-center position-relative">Blog of Car</h1>
        </div>
      </div>

      <div className="blog mt-5 mb-5 ">
        <div className="container ">
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 ">
              <div className="card ">
                <div className="blog-image">
                  <img
                    className="card-img-top w-100"
                    src="https://www.pilawyers.com/wp-content/uploads/2024/02/pfeifer-crash-scene-hazards-BLOG.jpg"
                    alt="Card"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title blog-title fw-bold ">
                    Crash Scene Hazards That South Bend Accident Victims Need To
                    Avoid.
                  </h4>
                  <p className="text-muted mb-4">
                    Some people may think they can drive drowsy because they can
                    stay awake even when sleep deprived. But those who haven’t
                    slept enough are still....
                  </p>
                  <Link className="blog-link px-3 py-2" to={"/blogdetails/14"}>
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card ">
                <div className="blog-image">
                  <img
                    className="card-img-top w-100"
                    src={require("../../assests/Posts/tire-pressure-light.png")}
                    alt="Card"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title blog-title fw-bold ">
                    Crash Scene Hazards That South Bend Accident Victims Need To
                    Avoid.
                  </h4>
                  <p className="text-muted mb-4">
                    Some people may think they can drive drowsy because they can
                    stay awake even when sleep deprived. But those who haven’t
                    slept enough are still....
                  </p>
                  <Link className="blog-link px-3 py-2" to={"/blogdetails/14"}>
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card ">
                <div className="blog-image">
                  <img
                    className="card-img-top w-100"
                    src={require("../../assests/Posts/tire-pressure-light.png")}
                    alt="Card"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title blog-title fw-bold ">
                    Crash Scene Hazards That South Bend Accident Victims Need To
                    Avoid.
                  </h4>
                  <p className="text-muted mb-4">
                    Some people may think they can drive drowsy because they can
                    stay awake even when sleep deprived. But those who haven’t
                    slept enough are still....
                  </p>
                  <Link className="blog-link px-3 py-2" to={"/blogdetails/14"}>
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card ">
                <div className="blog-image">
                  <img
                    className="card-img-top w-100"
                    src={require("../../assests/Posts/tire-pressure-light.png")}
                    alt="Card"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title blog-title fw-bold ">
                    Crash Scene Hazards That South Bend Accident Victims Need To
                    Avoid.
                  </h4>
                  <p className="text-muted mb-4">
                    Some people may think they can drive drowsy because they can
                    stay awake even when sleep deprived. But those who haven’t
                    slept enough are still....
                  </p>
                  <Link className="blog-link px-3 py-2" to={"/blogdetails/14"}>
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
