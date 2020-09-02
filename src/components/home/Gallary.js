import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css'
import preventive_maintenance1 from "./image/preventive_maintenance1.jpeg"
import hydraulic_services from "./image/hydraulic_services.jpg"
import hose_repair from "./image/hose_repair.jpg"
import fittings from "./image/fittings.jpg"
import preventive_maintenance3 from "./image/preventive_maintenance3.jpg"
import machines from "./image/machines.jpeg";

//

const Gallary = () => {
    return (
      <div className="container card bg-light">
        <div className="row card-body">
          <div className="col">
            <div id="slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img className="prevent" src={preventive_maintenance3} alt="" />
                  <p className="products"> hydraulic </p>
                </div>
                <div className="carousel-item">
                  <img className="prevent" src={machines} alt="" />
                  <p className="products "> Machine </p>
                </div>
                <div className="carousel-item bounce">
                  <img className="prevent" src={fittings} alt=""  />
                  <p className="products"> Assembly fittings </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col ">
            <div id="slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img className="prevent" src={preventive_maintenance1} alt="" />
                  <p className="products"> preventive maintenance</p>
                </div>
                <div className="carousel-item">
                  <img className="prevent" src={hydraulic_services} alt=""  />
                  <p className="products"> hydraulics</p>
                </div>
                <div className="carousel-item">
                  <img className="prevent" src={hose_repair} alt="" />
                  <p className="products"> custom hydraulic hoses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Gallary
