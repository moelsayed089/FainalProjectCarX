import React, { createContext, useEffect } from 'react'
import { useState } from 'react'

export const authContext = createContext()

export default function AuthProvider({children}) {

  console.log(children)
const [token,setToken]=useState(null)
const [userData, setUserData] = useState({});

console.log(token)
console.log(userData)

// handel user refresh 
useEffect(()=>{
if (localStorage.getItem("useData") !== '') {

  setUserData(JSON.parse(localStorage.getItem("useData")));
}

if (localStorage.getItem("token") !== null) {
  setToken(localStorage.getItem("token"));
}
},[])

  return (
    <authContext.Provider value={{ token, userData, setToken, setUserData }}>
      {children}
    </authContext.Provider>
  );
}
