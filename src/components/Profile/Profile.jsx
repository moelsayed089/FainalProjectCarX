import React, { useContext } from 'react'
import ProfileStyle from './Profile.module.css'
import { authContext } from '../../Context/AuthProvider';
import { Puff } from 'react-loader-spinner';

export default function Profile() {

  // const [isLoading, setIsLoading] = useState(null);

  const { userData } = useContext(authContext);
  // console.log(userData);

if(!userData) 
return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#013e6a"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <>
      <div className="container col-lg-6  mt-4 px-2">
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

        <div className="pb-5">
          <label className="fw">FullName</label>
          <h2 className="form-control mb-3"> {userData.name}</h2>

          <label className="fw">Email</label>
          <h2 className="form-control mb-3"> {userData.email}</h2>

          <label className="fw">Phone</label>
          <h2 className="form-control mb-3"> {userData.phone}</h2>

          <label className="fw">Car Type</label>
          <h2 className="form-control "> {userData.car}</h2>
        </div>
      </div>
    </>
  );
  
  
}
