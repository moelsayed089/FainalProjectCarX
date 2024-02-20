import React, { useContext } from 'react'
import ProfileStyle from './Profile.module.css'
import { authContext } from '../../Context/AuthProvider';

export default function Profile() {

  const { userData } = useContext(authContext);
  console.log(userData);
  return (
    <>
      <div className="container col-lg-6  mt-5 px-2">
        <div className="d-flex flex-column  align-items-center">
          <div className=" py-4">
            <img
              src={require("../../assests/Memoji/profile.png")}
              alt="..."
              className={`${ProfileStyle.imageProfile} w-100 rounded-circle`}
            />
          </div>
          <h4 className={`${ProfileStyle.Personaltitle} `}>Personal Details</h4>
        </div>

        <div className='pb-5'>
          <label className="fw">FullName</label>
          <h2 className="form-control"> {userData.name}</h2>

          <label className="fw">Email</label>
          <h2 className="form-control"> {userData.email}</h2>

          <label className="fw">Phone</label>
          <h2 className="form-control"> {userData.phone}</h2>

          <label className="fw">Car Type</label>
          <h2 className="form-control"> {userData.car}</h2>
        </div>
      </div>
    </>
  );
  
  
}
