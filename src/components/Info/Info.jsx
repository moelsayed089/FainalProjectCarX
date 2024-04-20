import React, { useEffect } from 'react'
import './Info.css'
import { Serves } from '../../data'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Info = () => {
    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        });
    }, [])
    return <>
        <section className="Services">
            <div className="main-text mt-5">
                <h1 className="text-center position-relative">What Our Serves For You</h1>
            </div>
            <div className="d-flex justify-content-center ">
                <div className="text-center col-lg-6  text-muted mt-2 " >
                    <p className="">
                        The application utilizes advanced machine learning algorithms to analyze various factors such as vehicle symptoms, error codes, and historical data to identify potential issues.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4 mt-3">
                    {Serves.map((item)=>{
                        return(
                            <div key={item.id} className="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                <div className="ser-item text-center border p-5 ">
                                    <img className='Services_icoins' src={item.image} alt="" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400" />
                                    <h3 className="fw-bold fs-5 mt-3" data-aos="fade-up" >{item.title}</h3>
                                    <p className="mt-2" >{item.decription}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    </>
}
