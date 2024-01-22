import React from 'react'
import { Navigate } from 'react-router-dom'



// handel URL pass
export default function ProtectedRoute({children}) {
    if(localStorage.getItem('token') === null){
        return <Navigate to={'/home'} />
    }
  return <>
  {children}
  </>
}
