import React from "react"
import preventive1 from "../image/preventive1.jpg"
import preventive2 from "../image/preventive2.jpg"
import preventive3 from "../image/preventive3.jpg"

const Services = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4 className="services">
                        Our Services
                    </h4>
                     <h5> Hose Repairs And Replacement</h5> 
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
               
           
                    <h6 className="services"> <b> HYDRAULIC SERVICES </b></h6>
                    <p> If you have hydraulic issues that’s slowing down production time. We have got a team of 
                        experts in hydraulic systems and equipment, for repairs and inspections. Call us at BCS 
                        hose and fluid services now! Lets get it fixed in no time.
                    </p>


                    <h6 className="services"> <b> PREVENTIVE MAINTENANCE</b>  </h6>
                    <p>
                        Hydraulic malfunctions and breakdown don’t happen on schedule or at a convenient time but 
                        when it occurs, can be costly and dangerous. That’s why we suggest a proactive hydraulic 
                        and maintenance program with us. We will report to your site for inspection and repairs according 
                        to the plan most suitable for your machines and equipments.
                        Call us today! or fill our contact form below and lets schedule an appointment. 
                    </p>


                    
                </div>

            </div>
            <div className="container preventive">
                <div className="row">
                    <div className="col">
                        <img className="prevent" src={preventive1} />

                    </div>
                    <div className="col">
                        <img className="prevent" src={preventive2} />

                        
                    </div>
                
                </div>
            </div>

        </div>
    )
}



export default Services