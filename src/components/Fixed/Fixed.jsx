import React from 'react'
import './Fixed.css'

export const Fixed = () => {
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row pt-4">
                  <div className="col-lg-4 mb-3">
                    <div className="card">
                      <div className="blog-imge overflow-hidden ">
                        <img
                          src={require("../../assests/CarSymbols/fix1.jpg")}
                          className="card-img-top w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h2 className="card-title ">Toyota</h2>
                        <p className="card-text mb-2">
                          <span className="fixed-span">Address: </span>
                          15-street Araby - Cairo
                        </p>

                        <p className="card-text mb-2">
                          <span className="fixed-span">Work: </span>
                          at 9pm - 5pm
                        </p>

                        <p className="card-text mb-2">
                          <span className="fixed-span">Phone: </span>
                          +02 011 2255 459
                        </p>
                        <a href="#" className=" blog-info position-relative">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-3">
                    <div className="card">
                      <div className="blog-imge overflow-hidden ">
                        <img
                          src={require("../../assests/CarSymbols/fix1.jpg")}
                          className="card-img-top w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h2 className="card-title ">Toyota</h2>
                        <p className="card-text mb-2">
                          <span className="fixed-span">Address: </span>
                          15-street Araby - Cairo
                        </p>

                        <p className="card-text mb-2">
                          <span className="fixed-span">Work: </span>
                          at 9pm - 5pm
                        </p>

                        <p className="card-text mb-2">
                          <span className="fixed-span">Phone: </span>
                          +02 011 2255 459
                        </p>
                        <a href="#" className=" blog-info position-relative">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-3">
                    <div className="card">
                      <div className="blog-imge overflow-hidden ">
                        <img
                          src={require("../../assests/CarSymbols/fix1.jpg")}
                          className="card-img-top w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <h2 className="card-title ">Toyota</h2>
                        <p className="card-text mb-2">
                          <span className="fixed-span">Address: </span>
                          15-street Araby - Cairo
                        </p>

                        <p className="card-text mb-2">
                          <span className="fixed-span">Work: </span>
                          at 9pm - 5pm
                        </p>

                        <p className="card-text mb-2">
                          <span className="fixed-span">Phone: </span>
                          +02 011 2255 459
                        </p>
                        <a href="#" className=" blog-info position-relative">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
}
