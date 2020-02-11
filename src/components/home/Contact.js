import React, { Component } from "react"
import { Link } from 'react-router-dom'
//import AliceCarousel from "react-alice-carousel" 
//import  bed1 from "../image/bed1.jpg"
//import Gallary from "../gallary/gallary"




class Contact extends Component {
    constructor() {
        super()
        this.onchangeMessage = this.onchangeMessage.bind(this)
        this.onchangeEmail = this.onchangeEmail.bind(this)
        this.onchangeName = this.onchangeName.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: "",
            tittle: "",
            email: "",
            message: "",



        }
    }
    onchangeName(e) {
        console.log(e.target.value)
        this.setState({
            name : e.target.value
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

    handleSubmit() {

    }




    render() {

        return (
            <div>

                <form className="text-center" >
                    <div className="container">
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
