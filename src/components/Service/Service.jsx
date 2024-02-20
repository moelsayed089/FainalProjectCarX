import { useContext, useState } from "react";
import { authContext } from "../../Context/AuthProvider";

export default function Service() {


  const { userData } = useContext(authContext) 
  console.log(userData)

// if(isLoading) return <h3>loadinnnnnn</h3>
  return (
    <>
      <div className="text-center">
        <h1>{userData.name}</h1>
        <h1>{userData.email}</h1>
        <h1>{userData.name}</h1>
        <h1>{userData.name}</h1>
      </div>
    </>
  );
}
