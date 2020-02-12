
import React, { Component } from "react"
import {  Link } from 'react-router-dom'
//import AliceCarousel from "react-alice-carousel" 
//import  bed1 from "../image/bed1.jpg"
import Gallary from "./Gallary"
import Contact from "./Contact"




class Home extends Component {
    constructor() {
        super()
       

    }
    render() {

        return (

        <div>    
            <div>
                <Gallary/>
            </div>
                <div className="container animated swing">
                    <div className="row">
                        <div className="col">
                            <h4> Our Services </h4>                 
                            <p className="card-body bg-light"> We provide hose assembly solutions which includes repairs of worn hose, 
                                bursted hose, rebuild and custom fit replacement hoses for any of your 
                                machines. Our team of experienced hose and hydraulic technicians are trusted
                                to give you quality service anytime. We are specialists in repairs of hydraulic 
                                hose, power steering, industrial, steam and high pressure hoses. <Link to="/services" > Read more... </Link>  
                             </p>             
                      </div>          
                   </div>
               </div>
               <div className="container   animated swing">
                    <div className="row">
                    <div className="col">
                        <h4> Our Team </h4>
                            <p className="card-body bg-light">
                           Our vast experience in major industries repairing, servicing hoses, 
                           and hydraulics gives us the quality you’re looking for. BCS hose and
                            fluid services have a network of quality technicians guaranteed to give our 
                            customers quality service and very quick too.
                            
                            Whether you require new hoses and couplings, or hydraulic repairs and inspection,
                             we arrive on-site equipped to get the job done right and quickly!
                            We supply and adapt quality brands of hose and fittings for our jobs, and also allow 
                            our customers to choose the brands they prefer. All our brands meet the specifications 
                            and guidelines of the following:
                            ISO (International Standard Organization)
                            SAE (Society of Automotive Engineers)
                            DIN (Deutsche Industrial Norme)
                            JIS (Japanese Industrial Standard).
                            
       
                        </p>

                    </div>
                </div>
            </div>
                <div className="container animated swing ">
                    <div className="row">
                    <div className="col">
                        <h4 id="about"> About us </h4>
                          <p className="card-body bg-light">
                            BCS hose and fluid services is a tradename for the company B.C Okezie and Sons
                            Enterprises. The company specializes in repairs, rebuild and maintenance of hoses 
                            and hydraulics. We handle every hose and hydraulic problems associated with wears,
                            bursts, pullouts, abrasion, breakdown, and replacements. We also offer custom replacements
                            for any type of hydraulic hose.
  
                        </p>

                    </div>
                    
                </div>
            </div>
                
               
        </div>

        )
    }  
}

export default Home;
