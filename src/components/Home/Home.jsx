import React, { useEffect } from 'react'


import './Home.css'
import About from '../About/About'
import { Feedback } from '../Feedback/Feedback'
import { Footer } from '../Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Info } from '../Info/Info'


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center">
        <div className="container ">
          <div className="row align-items-center g-4 ">
            <div className="col-lg-6" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="750"  >
              <div className="home-text"  >
                <h1>
                  Let's discover problem that related your car with AI
                </h1>
                <h3>Care for your car, it cares for you.</h3>
                <p className="text-muted lh-base">
                  Predict Car Problems using AI and Expert Systems is a sophisticated web application designed to assist car owners and enthusiasts in diagnosing and predicting potential issues with their vehicles.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="750">
              <div className="home-img d-flex justify-content-center align-items-center">
                <img
                  src={require("../../assests/Cars/kia-20.png")}
                  className=""
                  alt="home-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      {/* <Support /> */}
      {/* <ComeSoon /> */}
      <Info/>
      <Feedback />
      <Footer />
    </>
  );
}
