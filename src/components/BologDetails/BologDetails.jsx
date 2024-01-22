import axios from "axios";
import React from "react";
import { Puff } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import './BologDetails.css'

export default function BologDetails() {
  let { id } = useParams();
  console.log(id);

  function getDetailsBlog() {
    return axios.get(`http://127.0.0.1:8000/api/blogs/${id}`);
  }
  let { data, isLoading } = useQuery("blogDetails", getDetailsBlog);
  

  const datax = data?.data.blogs

  console.log(datax)

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
          <div className="container mt-5 ">
                <div className="row p-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="img-card mb-4">
                      <img
                        // src={require("../../assests/Posts/tire-pressure-light.png")}
                        src={datax.image}
                        className="w-100 shadow-sm rounded-3"
                        alt="iamge_symobol"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-12 ">
                    <div className="blog-info">
                      <h2 className="text- mb-2">{datax.title}</h2>
                      <h5 className="text-warning">What It Means:</h5>
                      <p className="text-muted">
                        Also known as the Tire Pressure Monitoring System (TPMS)
                        symbol, this image signals an issue with your tire
                        pressure or the TPMS. If the TPMS symbol is solid, then
                        the pressure in one or more of your tires is too low or
                        too high. If the TPMS symbol flashes for 60-90 seconds
                        when you turn on your vehicle and then stays
                        illuminated, even if your tires are properly inflated,
                        then something is wrong with your TPMS sensors.
                      </p>

                      <h5 className=" text-warning"> What To Do:</h5>

                      <p className="text-muted">
                        Driving on low- or high-pressure tires is unsafe and can
                        cause damage to your tires. We recommend stopping as
                        soon as possible to inflate or deflate your tires to the
                        correct pressure. If your light turns on when you’re
                        near a Virginia Tire & Auto, drop on by! We have free
                        air available at all our stores, or one of our team
                        members can repair or replace your tire in no time. We
                        can also look at your TPMS sensors to find any issues
                        and provide a quote for repair. A malfunctioning TPMS
                        will not affect your tires’ performance, but it will
                        keep the system from alerting you when your tires are
                        low.
                      </p>
                    </div>
                  </div>
                </div>
              
          </div>
        </main>
      
    </>
  );
}
