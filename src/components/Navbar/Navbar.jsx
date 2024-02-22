import React, { useContext } from 'react'
import './Navbar.css'
import  {Link, NavLink, useNavigate}  from 'react-router-dom'
import { authContext } from '../../Context/AuthProvider'

export default function Navbar() {

const {token,setToken ,userData,setUserData } = useContext(authContext)

const navigate = useNavigate()

function logout(){
  localStorage.removeItem('token')
  localStorage.removeItem("useData");
  setToken(null)
  setUserData({})
  navigate('/home')
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bolder navCar" to="/">
            CAR-X
            {/* <img src={ require('../../assests/Logos/638e307b3eae41f3706b4076.png') } alt="" /> */}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {token ? (
                <>
                  <li className="nav-item">
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
              {token ? (
                <>
                  <li onClick={logout} className="nav-item ">
                    <span className="nav-link btnNav btn btn-outline-danger rounded-pill px-4 shadow-none">
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
                      className="nav-link text-white btnColor  btn  rounded-pill px-4 shadow-none"
                      to="/register"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item mx-lg-2 mb-3 mb-lg-0 ">
                    <Link
                      className="nav-link btnNav btn btnColorlogin rounded-pill px-4 shadow-none"
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
