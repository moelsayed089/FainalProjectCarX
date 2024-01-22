import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const authContext = createContext()

export default function AuthProvider({children}) {
const [token,setToken]=useState(null)


// handel user refresh 
useEffect(()=>{
if(localStorage.getItem('token') !== null){
  setToken(localStorage.getItem("token"));
}
},[])

  return <authContext.Provider value={{token, setToken}}>
  {children}
  </authContext.Provider>
}
