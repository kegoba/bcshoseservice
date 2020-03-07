import React from "react"
import { SocialIcon} from "react-social-icons"

const Footer =()=>{
    return(
        
        <div className="footer text-center">
            < div className="container">
                <div className="row">
                    <div className="col-md">
                        <h4> Address </h4>
                        <p> 17, Unity Avenue Street,</p>
                        <p> Ilasamaja, along Oshodi</p>
                        <p> Apapa Expressway, Lagos.</p>

                    </div>
                    <div className="col-sm">
                        <h4> Contact </h4>
                        <p> 07030574793 (WhatsApp)</p>
                        <p> 07082260445 </p>
                        <p> bcshoseservices@gmail.com</p>


                    </div>
                 
                </div>
            </div>
            <div className="container footer text-center">
                <p>  Copy right  2020, Developed by ken-tech</p>
            </div>
        </div>
    )
}


export default Footer;