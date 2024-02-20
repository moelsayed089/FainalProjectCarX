
import './BologDetails.css'

export default function BologDetails() {
  
  return (
    <>
      <main className="BologDetails">
        <div className="container mt-5 ">
          <div className="row p-1">
            <div className="col-lg-4 col-md-6">
              <div className="img-card mb-4">
                <img
                  src={require("../../assests/Posts/tire-pressure-light.png")}
                  // src={i}
                  className="w-100 shadow-sm rounded-3"
                  alt="iamge_symobol"
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-12 ">
              <div className="blog-info">
                <h2 className="text- mb-2">;ds;ds;ds</h2>
                <h5 className="text-warning">What It Means:</h5>
                <p className="text-muted">
                  Also known as the Tire Pressure Monitoring System (TPMS)
                  symbol, this image signals an issue with your tire pressure or
                  the TPMS. If the TPMS symbol is solid, then the pressure in
                  one or more of your tires is too low or too high. If the TPMS
                  symbol flashes for 60-90 seconds when you turn on your vehicle
                  and then stays illuminated, even if your tires are properly
                  inflated, then something is wrong with your TPMS sensors.
                </p>

                <h5 className=" text-warning"> What To Do:</h5>

                <p className="text-muted">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus nam eum odit error aperiam, numquam quo repudiandae, eligendi, vero distinctio expedita veniam similique modi quos tempora mollitia incidunt quas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
