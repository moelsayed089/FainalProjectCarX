import React from 'react'
import './Fixed.css'

export const Fixed = () => {
  return (
    <>
      <section class="fixed mb-5 ">
        <div className="main-text py-3">
          <h1 className=" text-center position-relative">Fixed Center</h1>
        </div>

        <div class="container">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row pt-4">
                  <div class="col-lg-4 mb-3">
                    <div class="card">
                      <div class="blog-imge overflow-hidden ">
                        <img
                          src={require("../../assests/CarSymbols/3.jpg")}
                          class="card-img-top w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div class="card-body">
                        <h2 class="card-title ">Toyota</h2>
                        <p class="card-text mb-2">
                          <span className="fixed-span">Address: </span>
                          15-street Araby - Cairo
                        </p>

                        <p class="card-text mb-2">
                          <span className="fixed-span">Work: </span>
                          at 9pm - 5pm
                        </p>

                        <p class="card-text mb-2">
                          <span className="fixed-span">Phone: </span>
                          +02 011 2255 459
                        </p>
                        <a href="#" class=" blog-info position-relative">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 mb-3">
                    <div class="card">
                      <div class="blog-imge overflow-hidden ">
                        <img
                          src={require("../../assests/CarSymbols/3.jpg")}
                          class="card-img-top w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div class="card-body">
                        <h2 class="card-title ">Toyota</h2>
                        <p class="card-text mb-2">
                          <span className="fixed-span">Address: </span>
                          15-street Araby - Cairo
                        </p>

                        <p class="card-text mb-2">
                          <span className="fixed-span">Work: </span>
                          at 9pm - 5pm
                        </p>

                        <p class="card-text mb-2">
                          <span className="fixed-span">Phone: </span>
                          +02 011 2255 459
                        </p>
                        <a href="#" class=" blog-info position-relative">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 mb-3">
                    <div class="card">
                      <div class="blog-imge overflow-hidden ">
                        <img
                          src={require("../../assests/CarSymbols/3.jpg")}
                          class="card-img-top w-100 h-100"
                          alt="..."
                        />
                      </div>
                      <div class="card-body">
                        <h2 class="card-title ">Toyota</h2>
                        <p class="card-text mb-2">
                          <span className="fixed-span">Address: </span>
                          15-street Araby - Cairo
                        </p>

                        <p class="card-text mb-2">
                          <span className="fixed-span">Work: </span>
                          at 9pm - 5pm
                        </p>

                        <p class="card-text mb-2">
                          <span className="fixed-span">Phone: </span>
                          +02 011 2255 459
                        </p>
                        <a href="#" class=" blog-info position-relative">
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
