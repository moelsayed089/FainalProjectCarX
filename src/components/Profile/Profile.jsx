import ProfileStyle from './Profile.module.css'
import { authContext } from '../../Context/AuthProvider';
import { useContext } from 'react';

export default function Profile() {
  // const storedUserData = localStorage.getItem("useData");
  // const userData = JSON.parse(storedUserData);

   const { userData  } = useContext(authContext);
  return (
    <>
      <div className={`container col-lg-6 mt-2 ${ProfileStyle.profile}`}>
        <div className="d-flex flex-column  align-items-center">
          <div className=" ">
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
          <h2 className="form-control mb-3"> {userData?.name}</h2>

          <div className="row">
            <div className='col-lg-6 '>
              <label className="fw">Email</label>
              <h2 className="form-control mb-3"> {userData?.email}</h2>
            </div>

            <div className='col-lg-6 '>
              <label className="fw">Phone</label>
              <h2 className="form-control  mb-3"> {userData?.phone}</h2>
            </div>
          </div>

          <label className="fw">Type Of Car1</label>
          <h2 className="form-control nnn "> {userData?.car}</h2>

          {userData?.car2 ? <><label className="fw">Type Of Car2</label>
          <h2 className="form-control nnn "> {userData?.car2}</h2> </>: ""}

        </div>
      </div>
    </>
  );


}
