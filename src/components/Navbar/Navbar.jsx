import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { authContext } from '../../Context/AuthProvider'
import Cookies from 'js-cookie';

export default function Navbar() {

  const { setToken, userData, setUserData } = useContext(authContext)

  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("useData")
    Cookies.remove('token')
    Cookies.remove('userData');
    setToken(null)
    setUserData({})
    navigate('/home')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light  ">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bolder navCar" to="/">
            CAR-X
          </Link>
          <button
            className=" shadow-none navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              {userData && userData?.token ? (
                <>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link active leftLink"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link leftLink" to="/service">
                      Services AI
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link leftLink" to="/symbol">
                      Car Symbol
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link leftLink" to="/blog">
                      Blog
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link leftLink" to="/fixed">
                      Maintenance Center
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link leftLink" to="/team">
                      Our Team
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {userData && userData?.token ? (
                <>
                  <li onClick={logout} className="nav-item  d-flex justify-content-center  align-items-center">
                    <span className="nav-link btnNav btn btn-outline-danger py-2 px-4 w-100 shadow-none">
                      Logout
                    </span>
                  </li>

                  <li className="nav-item">
                    <div className="flex justify-content-center align-items-center">
                      <NavLink className="nav-link leftLink" to="/profile">
                        <i className="fa-solid fa-user"></i>
                        {userData?.name}
                      </NavLink>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item  mb-3 mb-lg-0  ">
                    <Link
                      className="nav-link text-white btnColor  btn   px-4 shadow-none"
                      to="/register"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item mx-lg-2 mb-3 mb-lg-0 ">
                    <Link
                      className="nav-link btnNav btn btnColorlogin  px-4 shadow-none"
                      to="/login"
                    >
                      Sign in
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
