import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return <>
<div className="not-page d-flex justify-content-center align-items-center">
    <div className="container ">
      <div className="row align-items-center ">
        <div className="col-lg-5">
          <div className="not-page-info">
            <h1 >404</h1>
            <h3>Oops, you still haven't <br /> found what you looking for?</h3>
            <p className=' text-muted lh-base '>The page you are looking for might have been removed,had its name changed, or is temporarily unavailable.</p>

                <Link to={'/home'} className='btn btn-primary py-2 px-4 shadow-none'>
                        <i class="fa-solid fa-arrow-left-long pe-3"></i>
                        Back to Home Page
                </Link>


          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}
