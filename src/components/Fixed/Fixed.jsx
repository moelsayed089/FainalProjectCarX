import React from 'react'
import './Fixed.css'
import axios from 'axios';
import { Puff } from 'react-loader-spinner';
import { useQuery } from 'react-query';


export const Fixed = () => {
  const getCenterFiexd = ({ signal }) => {
    return axios.get("http://127.0.0.1:8000/api/centers", { signal });
  };
  const { data, isLoading } = useQuery("allBlog", getCenterFiexd);
  console.log(data?.data.centers);
  const centerDataFixed = data?.data.centers;

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
      <section className="fixed mb-5 ">
        <div className="main-text py-3">
          <h1 className=" text-center position-relative">Fixed Center</h1>
        </div>

        <div className="container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="row pt-4">
              {centerDataFixed
                ? centerDataFixed.map((item) => (
                    <div key={item.id} className="col-lg-4 mb-3">
                      <div className="card">
                        <div className="blog-imge  ">
                          <img
                            src={
                              item.image
                                ? item.image
                                : "https://images.unsplash.com/photo-1578897842997-d7de7d395b8f?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            className="card-img-top w-100 h-100"
                            alt="..."
                          />
                        </div>
                        <div className="card-body">
                          <h2 className="card-title ">{item.name}</h2>
                          <p className="card-text mb-2">
                            <span className="fixed-span">Address: </span>
                            {item.address}
                          </p>

                          <p className="card-text mb-2">
                            <span className="fixed-span">Work: </span>
                            at 9pm - 5pm
                          </p>

                          <p className="card-text mb-2">
                            <span className="fixed-span">Phone: </span>
                            +02 011 2255 459
                          </p>
                          {/* <a
                            href="https://www.toyota.com/"
                            target="_blank"
                            className=" blog-info position-relative"
                          >
                            Read More
                          </a> */}
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
}
