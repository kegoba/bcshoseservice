import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import metal from "../image/home/metal.jpeg"
import hydraulics from "../image/home/hydraulics.jpg"
import hydraulic from "../image/home/hydraulic.jpg"
import custom from "../image/home/custom.jpg"
import fittings from "../image/home/fittings.jpg"


import Spiral from "../image/home/Spiral.jpg"
const Gallary = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel mouseTrackingEnabled>
            <div className="container card bg-light ">
                <div className="row card-body">
                    <div className="col">
                        <img src={Spiral} className="yours-custom-class" />
                        <p> Spiral braided hose</p>
                    </div>
                    <div className="col">
                        <img src={hydraulics} className="yours-custom-class" />
                        <p> hydraulics</p>
                    </div>
                    <div className="col">
                        <img src={custom} className="yours-custom-class" />
                        <p>  custom hydraulic hoses</p>
                    </div>


                </div>

            </div>
            <div className="container card bg-light">
                <div className="row card-body">
                    <div className="col">
                        <img src={hydraulic} className="yours-custom-class" />
                        <p> hydraulic </p>
                    </div>
                    <div className="col">
                        <img src={metal} className="yours-custom-class" />
                        <p> Metal  </p>
                    </div>
                    <div className="col">
                        <img src={fittings} className="yours-custom-class" />
                        <p> Assembly fittings </p>
                    </div>
                </div>

            </div>
        </AliceCarousel>
    )
}
export default Gallary
