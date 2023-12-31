import React, { Component } from "react";
import FormStyle from './FormStyle'

class ContactTwo extends Component{
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <span className="subtitle">Let's Say Hi</span>
                                <h2 className="title">Contact With Us.</h2>
                                <div className="im_address">
                                    <span>Call us directly:</span>
                                    <a className="link im-hover" href="phone">+111 (0)55 5869 8976</a>
                                </div>
                                <div className="im_address mt--5">
                                    <span>Contact Email:</span>
                                    <a className="link im-hover" href="email">example@gmail.com</a>
                                </div>
                            </div>
                            <FormStyle />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;