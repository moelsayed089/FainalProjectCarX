import React, { useContext, useState } from 'react'
import './Login.css'
import { useFormik } from 'formik'
import axios from 'axios'
import { Bars } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';




export default function Login() {

const [errorMessage,setErrorMessage] = useState(null)
const [successMessage,setSuccessMessage] = useState(null)
const [isLoading,setIsLoading]=useState(null)


const {setToken} = useContext(authContext)


const navigate = useNavigate()

async function loginUser(values){
  setIsLoading(true)
  // setErrorMessage(null)
  try{
    const {data} = await axios.post('http://127.0.0.1:8000/api/auth/login',values)
    // console.log(data);
    if(data.message === 'User Logged In Successfully'){
      setSuccessMessage('Sign in is Successfull , Wellcome in CAR-X')
    }

    localStorage.setItem( 'token' , data.token)
    setToken(data.token)


    setTimeout(() =>{
      navigate('/home')
    },1000)

  }
  catch(error){
    // console.log(error.response.data.message);
    let errorResponse = error.response.data.message;
    if(errorResponse ==="Email & Password does not match with our record." ){
    setErrorMessage("Email or Password is not valid")
    }
    
  }

  setIsLoading(false)
}


let formObject = useFormik({
  initialValues:{
    email:'',
    password:''
  },
  onSubmit : loginUser,
  
  validate : (values) => {

    setErrorMessage(null)

    const errors = {};

    if(values.email.includes('@') === false || values.email.includes('.') === false ){
      errors.email='Email not valid must be contain (@) and (.)'
    }
    
    if(values.password.length < 7 || values.password.length > 15 ){
      errors.password='Password must be form 7 characters to 15 characters'
    }
    
    return errors;
  }
})




  return <>
    <div className="login mt-5">
      <div className="container ">
        <div className="login-about d-flex  justify-content-lg-between align-items-lg-center">
            <div className="text-log ">
              <h1>
                Welcome Back.
                <br />
                <span className='Signin'>Sign In</span> Now!
              </h1>
            </div>
            <div className="img-log">
              <img src={ require('../../assests/Infographics_ Icons/8227.jpg') } className='w-100' alt="" />
            </div>
        </div>

        <div className="log-form mt-3">
          <form onSubmit = {formObject.handleSubmit} >
            <label className='lablelog' htmlFor="email">Email:</label>
            <input onBlur={formObject.handleBlur} value={formObject.values.email} onChange={formObject.handleChange} id='email' type="text" className=' form-control shadow-none mb-3 py-2 inputlog' />
            {formObject.errors.email && formObject.touched.email ? <div className=' alert alert-danger'>{formObject.errors.email}</div>: ""}

          
            <label className='lablelog' htmlFor="password">Password:</label>
            <input onBlur={formObject.handleBlur} value={formObject.values.password} onChange={formObject.handleChange} id='password' type="password" className=' form-control shadow-none mb-3 py-2 inputlog' />
            {formObject.errors.password && formObject.touched.password ? <div className=' alert alert-danger'>{formObject.errors.password}</div>: ""}
            
            {errorMessage ? <div className='alert alert-danger'>{ errorMessage }</div>: ""}
            {successMessage ? <div className='alert  alert-success'>{ successMessage }</div>: ""}
            
            
            <button disabled = {formObject.isValid === false || formObject.dirty === false} type='submit' className='btn btnlog py-3 px-4  shadow-none w-100' >
              
              
              {isLoading ? <div className=' d-flex justify-content-center'>
                <Bars 
          height="30"
          width="60"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
                        />
              </div> : "Sign in"}
              
              </button>


          </form>
        </div>
      </div>
    </div>
  </>
}
