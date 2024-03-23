import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

import './index.css'

const Footer = () => {
    return (
        <div className="footer-con">
            <div className="footer-icons-con">
                <CiFacebook className="icon" />
                <CiLinkedin className="icon" />
                <TiSocialTwitterCircular className="icon" />
                <FaTelegram className="icon" />
                <FaInstagram className="icon" />
                <FaGithub className="icon" />
            </div>
        </div>
    )
}

export default Footer;
