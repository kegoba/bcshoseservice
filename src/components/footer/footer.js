import React from "react"

export const SocialMedia = () => {
  return (
    <div className="socail-media fixed-top animated flip">
      <div className="media-handle card-body">
       <p> <a href="https://wa.me/2348189830161" >   <i className="fa fa-whatsapp fa1 ">  </i> </a></p>
        <p><a href="https://m.facebook.com/BCS-Services-109557460598778/">   <i className="fa fa-facebook fa1">  </i> </a> </p>
        <p> <a href="https://www.linkedin.com/in/okezie-chinwa-6a588793" >   <i className="fa fa-linkedin fa1">  </i> </a> </p>
        <p><a href="https://twitter.com/bcshoseservices?s=08" >   <i className="fa fa-twitter fa1">  </i> </a> </p>
       <p> <i className="fa fa-envelope fa1">   </i> </p>

      </div>

    </div>
  )
}

export const Footer =()=>{
    return (
      <div className=" container footer text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              
              <p> 17, Unity Avenue Street,
               Ilasamaja, along Oshodi
               Apapa Expressway, Lagos.</p>
            </div>
            
          </div>
          <i> Connect With Us </i>
          <div className="col">
             <a href="https://wa.me/2348189830161" >   <i className="fa fa-whatsapp fa1">  </i> </a>
            <a href="https://m.facebook.com/BCS-Services-109557460598778/" >   <i className="fa fa-facebook fa1">  </i> </a> 
             <a href="https://www.linkedin.com/in/okezie-chinwa-6a588793" >   <i className="fa fa-linkedin fa1">  </i> </a> 
            <a href="https://twitter.com/bcshoseservices?s=08" >   <i className="fa fa-twitter fa1">  </i> </a> 
             <i className="fa fa1 fa-envelope">   </i> 

          </div>

        </div>
        <div className="container footer text-center">
          <p> Copy right 2020, Developed by ken-tech</p>
        </div>
      </div>
    );
}






