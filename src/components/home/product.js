import React from "react"
import  crimping from "../image/crimping.jpeg"
import ferrules from "../image/ferrules.jpeg"
import fittings from "../image/fittings.jpg"
import metal from "../image/metal.jpeg"


//import crimping from "../image/Product/mechinces/crimping.jpg"
//\image\Product\Ferrules

const Product = ()=>{
    return (
    <div >
        <div className="container">
            <div className="row">
                <div className="col">
                   <h4> Products</h4> 
                       <p> At BCS we are focused on meeting the demand the demand for our customers, anytime, anywhere and offering the best quality in the market. We have the best stockists of hose accessories to suit any applications!
                        Our products are from reputable companies both locally and globally earning us an inventory of a broad range of products for every industry. Not sure which hydraulic fitting is best for your application or what fitting your looking for? Contact BCS today, and we’ll find one for you!
                        </p>
                        
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={crimping} />
                        <p>Machines</p> 
                        
                        
                </div>
                    <div className="col">
                        <img src={ferrules} />
                        <p>Ferrules</p> 
                        
                </div>
                    <div className="col">
                        <img src={fittings } />
                      <p> Fittings and Couplings </p>
                         
                         
                </div>
                    <div className="col">
                        <img src={metal} />
                       
                       <p>  Specials </p>
                </div>
                </div>
            </div>

    </div>
    )}




export default Product