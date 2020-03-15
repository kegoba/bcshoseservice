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
        
            <div className="container card bg-light">
                <div className="row card-body">
                    <div class="col">
                        <div id="slider" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active ">
                                <img className="prevent" src={hydraulic}  />
                                    <p className="products"> hydraulic </p>
                                </div>
                                <div class="carousel-item">
                                <img className="prevent" src={metal} />
                                    <p className="products "> Metal  </p>
                                </div>
                                <div class="carousel-item bounce">
                                <img className="prevent" src={fittings} />
                                    < p className="products"> Assembly fittings </p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                <div class="col ">
                    <div id="slider" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active ">
                                <img className="prevent" src={Spiral}/>
                                <p className="products"> Spiral braided hose</p>
                            </div>
                            <div class="carousel-item">
                                <img className="prevent"src={hyd} />
                                <p className="products"> hydraulics</p>
                            </div>
                            <div class="carousel-item">
                                <img className="prevent"src={custom}  />
                                <p className="products">  custom hydraulic hoses</p>
                            </div>
                         </div>
                    </div>
                </div>  
                </div> 
        </div>
    )
}
export default Gallary
