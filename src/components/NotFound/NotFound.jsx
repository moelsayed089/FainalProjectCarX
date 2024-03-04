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
                <h2 className="p-0">404</h2>
                <h4 className="fs-3 fw-normal ms-3">
                  <span className="text-danger fw">Oops!</span>
                  ,found what you looking for?
                </h4>
                <div>
                  <span className="text-muted ms-3 fs-5 ">
                    The page you’re looking for doesn’t exist.
                  </span>
                </div>

                <Link
                  to={"/home"}
                  className="btn btn-notfound py-2 px-4 shadow-none mt-3"
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
