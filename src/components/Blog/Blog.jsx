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
      <div className="blog-header  mt-2">
        <div className="main-text ">
          <h1 className=" text-center position-relative">Blog of Car</h1>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <div className="text-center col-lg-6  text-muted ">
            <p className="main-parg">
              Join our vibrant community of car enthusiasts, mechanics, and experts to share insights, ask questions, and collaborate on vehicle maintenance and repair tasks. Tap into the collective knowledge and experience of our community <span className="blod_span" >to solve problems and improve your vehicle ownership experience.</span>
            </p>
          </div>
        </div>
      </div>
    


      {data?.data.blogs ? <div className="blog mt-3 mb-3 ">
        <div className="container ">
          <div className="row g-3">
            {data?.data.blogs.map((item,idx)=>{
              return(
                <div key={idx} className="col-lg-4 col-md-6  ">
                  <div className="card">
                    <div className="blog-image">
                      <img
                        className="card-img-top w-100"
                        src={item.image}
                        alt="Card_image."
                      />
                    </div>
                    <div className="card-body">
                      
                        <h4 className="card-title blog-title fw-bold">
                          {item.title.split(" ").slice(0, 3).join(" ")}
                        </h4>
                        <p className="text-muted praaa mb-4">
                          {`${item.description.split(" ").slice(0, 11).join(" ")}....`}
                        </p>
                      
                      <Link className="blog-link px-3 py-2" to={`/blogdetails/${item.id}`}>
                        Read More
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div> : ""} 
    </>
  );
}
