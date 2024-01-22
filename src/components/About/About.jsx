import React from "react";
import "./About.css";
import { aboutData } from "../../data";

export default function About() {
    return (
        <>
            <div className="about  pb-5 ">
                <div className="main-text py-5">
                    <h1 className=" text-center position-relative">What We Do!</h1>
                </div>
                <div className="container">
                    <div className="row  pt-5 pb-5">
                        <div className="col-lg-5">
                            <div className="about-img position-relative ">
                                <img
                                    src={require("../../assests/Cars/ahoutt.jpg")}
                                    className="w-100"
                                    alt="about.jpg"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-text mt-5 mt-lg-0">
                                <h2 className="mb-4">
                                    We Predict Your Car Problem Using
                                    <br />
                                    <span className="about-text-span">AI & Expert System..</span>
                                </h2>
                                {/* =========>> RENDER DATA <<======= */}
                                {aboutData.map((prag) => (
                                    <div key={prag.id} className="info-about d-flex ">
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
