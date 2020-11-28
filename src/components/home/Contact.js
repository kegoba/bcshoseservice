import React, { Component } from "react"

import * as emailjs from 'emailjs-com'
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

                <div className=" container text-center  " >
                    <div  className=" container">
                        <p className="container contact"> For everything hose; hydraulic, water, oil and gas, power steering, 
                        steam, air, and metal, whatever and however you want the repair? 
                        We are the specialist!
                         
                        Our goal is to reach our customers as quick as possible and conveniently provide
                         superior services. <i className="btn btn-danger"> Get in touch </i>
                     </p>

                    </div>
                   
                   <div className="alert-success"> {this.state.msg} </div>
                    <form className="container animated bounce">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="text-center" onChange={this.onchangeName} value={this.state.name} placeholder="Enter Name" />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="text-center" onChange={this.onchangePhone} value={this.state.phone} placeholder="Phone Number" />
                                </div>
                            </div>
                        </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                    <input type="text" className="text-center" onChange={this.onchangeEmail} value={this.state.email} placeholder="Enter Email" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                            <div className="row">
                                <div className="col">
                                    <textarea type="textarea" className="text-center" onChange={this.onchangeMessage} value={this.state.message} placeholder="Message"  > </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-danger">  Send  </button>
                                </div>
                            </div>
                        </div>
            </form> 
                </div>



            </div>





        )
    }
}

export default Contact;
