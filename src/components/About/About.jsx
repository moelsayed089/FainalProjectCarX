import React, { useEffect } from "react";
import "./About.css";
import { aboutData } from "../../data";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="about mb-5 ">
                <div className="main-text mt-5">
                    <h1 className=" text-center position-relative">Who are we!</h1>
                </div>
                <div className="d-flex justify-content-center ">
                    <div className="text-center col-lg-6  text-muted p-2" >
                        <p className="about-span-header">
                            At <span>CAR-X</span> , we are your trusted partner in automotive diagnostics, maintenance, and repair solutions.With a passion for innovation and a commitment to excellence
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-5" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                            <div className="about-img position-relative ">
                                <img
                                    src={require("../../assests/Cars/ahoutt.jpg")}
                                    className="w-100"
                                    alt="about.jpg"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-text mt-5 mt-lg-0" >
                                
                                <h4 className="mb-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                    We've built a platform that revolutionizes the way vehicle owners address car problems and maintain their vehicles By <span className="about-text-span">AI & Expert System.</span>
                                </h4>
                                {/* =========>> RENDER DATA <<======= */}
                                {aboutData.map((prag) => (
                                    <div key={prag.id} className="info-about d-flex " data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" >
                                        <i className="fa-solid fa-arrow-right me-3 "></i>
                                        <p className="pb-2 text-muted lh-base">{prag.textInfo}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
