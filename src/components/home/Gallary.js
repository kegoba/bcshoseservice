import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import metal from "../image/home/metal.jpeg"
import hyd from "../image/home/hyd.jpg"
import hydraulic from "../image/home/hydraulic.jpg"
import custom from "../image/home/custom.jpg"
import fittings from "../image/home/fittings.jpg"


import Spiral from "../image/home/Spiral.jpg"
const Gallary = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel mouseTrackingEnabled>
            <div className="container card bg-light">
                <div className="row card-body">
                    <div className="col">
                        <img src={hydraulic} className="yours-custom-class" />
                        <p className="products"> hydraulic </p>
                    </div>
                    <div className="col">
                        <img src={metal} className="yours-custom-class" />
                        <p className="products"> Metal  </p>
                    </div>
                    <div className="col">
                        <img src={fittings} className="yours-custom-class" />
                        < p className="products"> Assembly fittings </p>
                    </div>
                </div>

            </div>
            <div className="container card bg-light ">
                <div className="row card-body">
                    <div className="col">
                        <img src={Spiral} className="yours-custom-class" />
                        <p className="products"> Spiral braided hose</p>
                    </div>
                    <div className="col">
                        <img src={hyd} className="yours-custom-class" />
                        <p className="products"> hydraulics</p>
                    </div>
                    <div className="col">
                        <img src={custom} className="yours-custom-class" />
                        <p className="products">  custom hydraulic hoses</p>
                    </div>


                </div>

            </div>
           
        </AliceCarousel>
    )
}
export default Gallary
