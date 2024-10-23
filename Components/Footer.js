import Logo from "../assets/Logo(1).svg"
import { BsYoutube } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { FaFacebookF } from "react-icons/fa"

const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="our logo"/>
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />

                </div>
            </div>

            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Our Brand</span>
                    <span>Work with Us</span>
                    <span>Reviews</span>
                    <span>Our Work</span>
                </div>

                <div className="footer-section-columns">
                    <span>2123557878</span>
                    <span>hello-donyts@sweetrings.com</span>
                    <span>contact@sweetrings.com</span>
                    <span>rh@sweetrings.com</span>
                </div>

                <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer