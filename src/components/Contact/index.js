import { CiLinkedin } from "react-icons/ci";

import {  FaGithub } from "react-icons/fa";

import './index.css'

const Contact=()=>{
    return (
        <div className='contact-main-head-con'>
            <div className='contact-head-con'>
                <h1>Contact Me: </h1>
                <div className="contact-con">
                    <p className="para-contact">LinkedIn- <a href="https://www.linkedin.com/in/venkatesh-sure007/" rel="noreferrer" target="_blank"><CiLinkedin className="contact-icon"/></a></p>
                </div>
                <div className="contact-con">
                    <p className="para-contact">Github- <a href="https://github.com/venkateshsure" rel="noreferrer" target="_blank"><FaGithub className="contact-icon"/></a></p>
                </div>
                <div className="contact-con-email">
                    <p className="para-contact">Email- venkateshitzsure@gmail.com</p>
                </div>
                <div className="contact-con-email">
                    <p className="para-contact">Phone no: 8008276937</p>
                </div>
            </div>
        </div>
    )
}

export default Contact