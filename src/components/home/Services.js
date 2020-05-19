import React from "react"
import preventive_maintenance2 from "./image/preventive_maintenance2.jpeg"
import preventive_maintenance3 from "./image/preventive_maintenance3.jpg"
import hose_repair_replacement from "./image/hose_repair_replacement.jpg"
import hose_repair_replacement1 from "./image/hose_repair_replacement1.jpeg"
import hydraulic_services from "./image/hydraulic_services.jpg"
import hydraulic_services1 from "./image/hydraulic_services1.jpg"


const Services = ()=>{
    return(
        <div className="container">
                    <h4 className="">OUR SERVICES</h4>
                    <p> Hose Repairs And Replacement</p> 
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img className=" image" src={hose_repair_replacement} />

                            </div>
                            <div className="col ">
                                <img className=" image" src={hose_repair_replacement1} />


                            </div>
                            <p>
                                We provide hose assembly solutions which includes repairs of worn hose, bursted hose,
                                rebuild and custom fit replacement hoses for any of your machines. Our team of experienced
                                hose and hydraulic technicians are trusted to give you quality service anytime.
                                We are specialists in repairs of hydraulic hose, power steering, industrial, steam and high
                                pressure hoses. Our expertise serves the following industry:
                        </p>
                    
                    Agriculture,
                    Manufacture,
                     Construction,
                     Mining,
                     Oil and Gas,
                    Food and Chemical,
                    Transportation and Utilities.

                        </div>
                    </div>

                    
                    <h6 className="services"> <b>  Hydraulic Services </b></h6>
                    <div className="container preventive">
                        
                        <div className="row">
                            <div className="col">
                                <img className=" image" src={hydraulic_services1} />

                            </div>
                            <div className="col ">
                                <img className=" image" src={hydraulic_services } />


                            </div>
                            <p> If you have hydraulic issues that’s slowing down production time. We have got a team of
                            experts in hydraulic systems and equipment, for repairs and inspections. Call us at BCS
                            hose and fluid services now! Lets get it fixed in no time.
                    </p>


                    </div>
                    </div>    
               
                
              <h6 className="services"> <b> Preventive Maintenance </b>  </h6>
            <div className="container preventive">
                
                    
                <div className="row">
                    <div className="col">
                        <img className=" image" src={preventive_maintenance2} />
                    </div>
                 <div className="col ">
                        <img className=" image" src={preventive_maintenance3} /> 
                 </div>
                    <p>
                        Hydraulic malfunctions and breakdown don’t happen on schedule or at a convenient time but
                        when it occurs, can be costly and dangerous. That’s why we suggest a proactive hydraulic
                        and maintenance program with us. We will report to your site for inspection and repairs according
                        to the plan most suitable for your machines and equipments.
                        Call us today! or fill our contact form below and lets schedule an appointment.
                    </p>

              </div>
              </div>

                
               

        </div>
    )
}



export default Services