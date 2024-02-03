import './Phone.css'




export default function Phone() {
  return (
    <>
      <div className="phone ">
        <div className="container">
          <div className="phonne d-flex justify-content-around align-items-center">
            <div className="infoo px-5">
              <h2>
                Get The App For Free And
                <br />
                Start Now
              </h2>

              <p className="w-75">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti, temporibus! Excepturi dolore recusandae totam
                laudantium iure rem vitae.
              </p>

              <button className=" btn btn-danger">Get alll poprixcc</button>
            </div>
            <div className="w-100 ">
              <img
                src={require("../../assests/phone_14_01.png")}
                className="w-100 "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
