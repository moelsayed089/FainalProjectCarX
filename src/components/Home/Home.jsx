import React from 'react'


import './Home.css'
import About from '../About/About'
import Support from '../Support/Support'
import ComeSoon from '../ComeSoon/ComeSoon'
import { Feedback } from '../Feedback/Feedback'
import { Footer } from '../Footer/Footer'
import { Fixed } from '../Fixed/Fixed'


export default function Home() {
  return <>
  <div className="home d-flex justify-content-center align-items-center">
    <div className="container ">
      <div className="row align-items-center g-4 ">
        <div className="col-lg-6">
          <div className="home-text">
            <h1><span className='home-span'>CAR-X</span> Here To Help</h1>
            <h3>Care for your car, it cares for you</h3>
            <p className='text-muted lh-base '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam tempora similique quia vitae cum aut magnam eveniet deserunt. Voluptatum maiores, debitis rem tempore molestiae totam porro! Perferendis tempora delectus praesentiumz</p>

          </div>
        </div>

        <div className="col-lg-6">
          <div className="home-img">
            <img src={ require('../../assests/Cars/kia-20.png') } className='w-100' alt="home-img" />
        
          </div>
        </div>
      </div>
    </div>
  </div>
  <About/>
  <Support/>
  <ComeSoon/>
  <Fixed/>
  <Feedback/>
  <Footer/>


  </>
}
