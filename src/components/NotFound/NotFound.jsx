import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <div className="not-page d-flex position-fixed top-0 end-0 bottom-0 start-0  align-items-center">
        <div className="container ">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <div className="col-lg-5">
              <div className="not-page-info text-center">
                <h1 className="">404</h1>
                <p className="fs-5 fw-bold">
                  <span className='text-danger'>Oops!</span>
                  ,found what you looking for?
                </p>
                <p className=" text-muted ">
                  The page you’re looking for doesn’t exist.
                </p>

                <Link
                  to={"/home"}
                  className="btn btn-notfound py-2 px-4 shadow-none"
                >
                  <i className="fa-solid fa-arrow-left-long pe-3"></i>
                  Back to Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
