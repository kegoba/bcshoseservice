import React, { Component } from "react"
import { Link } from 'react-router-dom'
import * as emailjs from 'emailjs-com'
//import AliceCarousel from "react-alice-carousel" 
//import  bed1 from "../image/bed1.jpg"
//import Gallary from "../gallary/gallary"




class Contact extends Component {
    constructor() {
        super()
        this.onchangeMessage = this.onchangeMessage.bind(this)
        this.onchangeEmail = this.onchangeEmail.bind(this)
        this.onchangeName = this.onchangeName.bind(this)
        this.onchangePhone = this.onchangePhone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: "",
            tittle: "",
            email: "",
            message: "",
            phone : "",
            success : false,
            msg : "",



        }
    }
    onchangeName(e) {
        console.log(e.target.value)
        this.setState({
            name : e.target.value
        })

    }
    onchangePhone(e) {
        console.log(e.target.value)
        this.setState({
            phone : e.target.value
        })

    }


    onchangeEmail(e) {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })

    }


    onchangeMessage(e) {
        console.log(e.target.value)

        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const {email, name, phone,  message } = this.state
        const send_data  ={
            email : email,
            phone : phone,
            name : name,
            message: message,
            //  template_ez4FxDLq

            //user_id = user_WtmWAM80GJCV4f4IBwjm1
            
        }
        console.log(send_data)
        
        emailjs.send(
            "gmail",
            'template_fpIu8UJk',
            send_data,
            'user_1b6ebQeWUAmq3xvTpxP2S'
        )
        .then((res)=>{
            this.setState({
                success : true,
                msg : "Message Sent Successfully!"
            })
        }, (err)=>{
            console.log(err)
        })

        this.setState({
            email: "",
            phone: "",
            name: "",
            message: "",
        })
        

    }




    render() {

        return (
            <div>

                <form className="text-center " >
                    <p className="products"> For everything hose; hydraulic, water, oil and gas, power steering, 
                        steam, air, and metal, whatever and however you want the repair? 
                        We are the specialist!
                        
                        Our goal is to reach our customers as quick as possible and conveniently provide
                         superior services. <b> Get in touch with us.....! </b>
                     </p>
                   <div className="alert-success"> {this.state.msg} </div>
                    <div className="container card-light">
                        <div className="row">
                            <div className="col">
                                <label className="text-center" > Name </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="text-center" onChange={this.onchangeName} value={this.state.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label className="text-center" > Phone </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="text-center" onChange={this.onchangePhone}  value={this.state.phone} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col">
                            <label className="text-center" > Email </label>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="text-center" onChange={this.onchangeEmail} value={this.state.email} />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label className="text-center"> Message </label>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <textarea type="textarea" className="text-center" onChange={this.onchangeMessage} value={this.state.message}  > </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-success">  Send  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>



            </div>





        )
    }
}

export default Contact;
