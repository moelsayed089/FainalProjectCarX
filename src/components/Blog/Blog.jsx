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
  const { data, isLoading } = useQuery("allBlog", getAllBlog);


  // console.log("isFetching  " + isFetching);
  // console.log(data?.data.blogs);
  // console.log(isLoading);

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

      {data?.data.blogs ? (
        <div className="blog mt-5 mb-5 ">
          <div className="container  col-9">
            <div className="row g-3">
              {/* =========>> RENDER DATA <<======= */}

              {data?.data.blogs.map((product) => {
                return (
                  <div className="col-lg-4 col-xl-3 col-md-6" key={product.id}>
                    <div className="card  w">
                      <div className="blog-image">
                        {product.image ? (
                          <img
                            className="card-img-top w-100"
                            src={product.image}
                            alt="Card"
                          />
                        ) : (
                          <img
                            className="card-img-top w-100"
                            src={require("../../assests/Posts/tire-pressure-light.png")}
                            alt="Card"
                          />
                        )}
                      </div>
                      <div className="card-body">
                        <h3 className="card-title blog-title mb-4   fw-bold ">
                          {product.title.split(" ").slice(0, 4).join(" ")}
                        </h3>
                        <Link
                          className="blog-link "
                          to={`/blogdetails/${product.id}`}
                        >
                          Read More
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
