import { useContext } from 'react'
import './Support.css'
import { Link } from 'react-router-dom'
import { authContext } from '../../Context/AuthProvider'
import { supportCarData } from '../../data'

 const Support =()=> {
  const { userData } = useContext(authContext);
  return (
    <>
      <div className="Support ">
        <div className="main-text  pt-5 ">
          <h1 className="text-center position-relative">Supporter Car</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="text-center col-lg-6  text-muted mt-2 " >
            <p className='px-3'>
              Our team of automotive experts provides personalized consultation and recommendations tailored to your specific needs. Whether you're unsure about a diagnosis or <span className='spport_span' >need advice on maintenance practices, our experts are here</span> to offer guidance and support every step of the way.
            </p>
          </div>
        </div>
        <div className=" container">
          <div className="row  g-3 pt-5 pb-5 ">

            {/* =========>> RENDER DATA <<======= */}
            {supportCarData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="450">
                <div className="card support_image  px-3 pt-5 ">
                  <img
                    src={item.suportImage}
                    className="card-img-top       w-100"
                    alt={item.name}
                    data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>{item.name.toUpperCase()}</span>
                    </h5>
                    <p className="card-text text-muted">{item.title}</p>

                    {/* =========>> HANDEL Authentication <<======= */}
                    {userData?.token ? (
                      <div className="card-btn d-flex  justify-content-between" >
                        <Link
                          to="/service"
                          className="btn btn-Service shadow-none"
                        >
                          Go Service AI
                        </Link>

                        <Link to="/blog" className="btn btn-outline-warning shadow-none">
                          Go Blog
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Support;