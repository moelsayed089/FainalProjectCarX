import React from 'react'
// import { Link } from 'react-router-dom'

import './Home.css'
import About from '../About/About'
import Support from '../Support/Support'
import ComeSoon from '../ComeSoon/ComeSoon'
import Phone from '../Phone/Phone'

export default function Home() {
  return <>
  <div className="home d-flex justify-content-center align-items-center">
    <div className="container ">
      <div className="row align-items-center ">
        <div className="col-lg-5">
          <div className="home-text">
            <h1><span className='home-span'>CAR-X</span> Here To Help</h1>
            <h3>Care for your car, it cares for you</h3>
            <p className=' text-muted lh-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet quod excepturi recusandae quaerat, porro, molestias at rerum, incidunt laudantium ex sed. Nulla dolores itaque illo labore molestiae, recusandae aliquam.</p>
            {/* <button className='btn btncolor py-2 px-4 mb-5 shadow-none'>Explore Services</button> */}
          </div>
        </div>

        <div className="col-lg-7">
          <div className="home-img">
            <img src={ require('../../assests/Cars/kia-20.png') } className='w-100' alt="home-img" />
            {/* <img src={ require('../../assests/Infographics_ Icons/43025.jpg') } className='w-100' alt="home-img" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <About/>
  <Support/>
  <ComeSoon/>
  <Phone/>
  </>
}
