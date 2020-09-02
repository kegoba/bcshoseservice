import React from "react"
import {Link} from "react-router-dom"
import  machines2 from "./image/machines2.jpeg"
import ferrules from "./image/ferrules.jpeg";
import fittings from "./image/fittings.jpg"
import metal from "./image/metal.jpg"


//import crimping from "../image/Product/mechinces/crimping.jpg"
//\image\Product\Ferrules

const Product = ()=>{
    return (
    <div >
            <div className="container preventive">
                <h4 className=" btn btn-danger" > PRODUCTS</h4> 
                       <p> At BCS we are focused on meeting the of demand for our customers, anytime, anywhere and offering the best quality in the market. We have the best stockists of hose accessories to suit any applications!
                        Our products are from reputable companies both locally and globally earning us an inventory of a broad range of products for every industry. Not sure which hydraulic fitting is best for your application or what fitting your looking for? Contact BCS today, and we’ll find one for you!
                        </p>
                        
                
        </div>
            <div className="container product">
                <div className="row">
                    <div className="col card-light">
                        <img className="image" src={machines2} alt="" /> 
                        <p className="products ">Machines <br/> <Link to={"/contact"} className=" btn btn-danger" >Place Order </Link> </p> 
                        
                        
                </div>
                    <div className="col card-light">
                        <img className="image" src={ferrules} alt="" />
                        <p className="products"> Ferrules <br/> <Link to={"/contact"} className=" btn btn-danger" >  Place Order </Link>  </p> 
                        
                        
                </div>
                    <div className="col card-light">
                        <img className="image" src={fittings} alt=""/>
                        <p className="products"> Fittings and Couplings  <br/><Link to={"/contact"} className=" btn btn-danger" > Place Order</Link>  </p>
                         
                         
                </div>
                    <div className="col card-light">
                        <img className="image" src={metal} alt="" />
                       
                        <p className="products">  Specials <br/>  <Link to={"/contact"} className=" btn btn-danger" >  Place  Order </Link>  </p>
                </div>
                </div>
            </div>

    </div>
    )}




export default Product