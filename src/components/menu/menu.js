import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from "../home/Home"
import Services from "../home/Services"
import Contact from "../home/Contact"
import Product from "../home/product"
import logo from "../image/logo.jpg"

import banner_x from "../image/banner_x.jpg"
import banner_xxl from "../image/banner_xxl.jpg"


class Menu extends Component {
    constructor() {
        super()
    }
    render() {
        //const user  = this.state.user.first_name
        return (

            <Router className="container text-center">
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <Link className="navbar-brand" to={"/"}>  <img className="logo" src={logo} />  </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#dropDrown">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="dropDrown" >
                            
                              
                                <ul className="navbar-nav ">
                                 <li className="nav-item">
                                    <Link to={"/"} className="nav-link text-left" > Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/services"} className="nav-link text-left" > Our Services </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/product"} className="nav-link text-left" > Our Products </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/contact"} className="nav-link text-left" > Contact Us </Link>
                                </li>
                              
                                </ul>
                                </div>
                         
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col banner_xxl">
                                <img src={banner_xxl} />
                            </div>
                           

                        </div>
                    </div>
                    <div className="container">
                        <div className="row" >
                            <div className="col banner_x">
                                <img src={banner_x} />
                            </div>
                        </div>
                    </div>

                    
                </div>
             
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/product" component={Product} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                
                    
                </Switch>

            </Router>



        )
    }
}

export default Menu;
