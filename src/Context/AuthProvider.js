import React, { createContext, useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);


  // handel user refresh
  useEffect(() => {
    // if (localStorage.getItem("useData") !== null) {
    //   setUserData(JSON.parse(localStorage.getItem("useData")));
    // }
    const userDataCookie = Cookies.get("userData");
    if (userDataCookie) {
      setUserData(JSON.parse(userDataCookie));
    }
  }, []);

  return (
    <authContext.Provider value={{ token, userData, setToken, setUserData }}>
      {children}
    </authContext.Provider>
  );
}
