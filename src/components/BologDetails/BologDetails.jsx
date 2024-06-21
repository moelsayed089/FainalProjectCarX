import axios from "axios";
import React from "react";
import { Puff } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./BologDetails.css";

export default function BologDetails() {
  let { id } = useParams();
 
  function getDetailsBlog() {
    return axios.get(`http://127.0.0.1:8000/api/blogs/${id}`);
  }
  let { data,isLoading } = useQuery("blogDetails", getDetailsBlog);



const blogDetails = data?.data.blogs

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
      <main className="BologDetails">
        <div className="container mt-3 ">
          <div className="row p-1">
            <div className="col-lg-12 col-md-12">
              <div className="img-card ">
                <img
                  src={blogDetails.image}
                  className="w-100 "
                  alt="iamge_symobol"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="blog-info mt-2 ">
                <h2 className="text- mb-2">{blogDetails.title}</h2>
                <h5 className="text-warning">
                  Reasons for the problem to occur :
                </h5>
                <p className="text-muted">{blogDetails.description}</p>
                <h5 className=" text-warning">
                  And the results are based on that :
                </h5>
                <p className="text-muted">{blogDetails.description2}</p>
                <h5 className=" text-warning"> How to avoid these problems :</h5>
                <p className="text-muted">{blogDetails.description3}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
