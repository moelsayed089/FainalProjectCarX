import React, { useEffect } from "react";
import "./ComeSoon.css";
import { comeSoonCar } from "../../data";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ComeSoon() {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
      <div className=" ComeSoon mb-5">
        <div className="come-title position-relative">
          <h2 className="text-center">Coming Soon</h2>
        </div>
        <div className="container ">
          <div className="row g-2  justify-content-center">

            {/* =========>> RENDER DATA <<======= */}
            
            {comeSoonCar.map((car) => (
              <div key={car.id} className="col-lg-2 col-sm-2 col-md-4 col-5 " data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500">
                <div className="come-card">
                  <img
                    src={car.imageCar}
                    className="card-img-top "
                    alt="Car_image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
