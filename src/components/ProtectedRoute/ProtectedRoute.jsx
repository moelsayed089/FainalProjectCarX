import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../../Context/AuthProvider';
import Cookies from 'js-cookie';






// handel URL pass
export default function ProtectedRoute({children}) {
  

  // Retrieve the token from cookies
  const token = Cookies.get('token');

  // Check if the token exists and if the user data contains a token
  if (!token) {
    // Redirect to the '/home' route if the user is not authenticated
    return <Navigate to="/home" />;
  }

  return <>
  {children}
  </>
}
