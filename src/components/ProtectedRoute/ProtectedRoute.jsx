import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from "js-cookie";




// handel URL pass
export default function ProtectedRoute({children}) {
  if (Cookies.get('token') === null) {
    return <Navigate to={'/home'} />
  }
  return <>
  {children}
  </>
}
