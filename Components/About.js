import { BsFillPlayCircleFill } from "react-icons/bs"
import AboutBackgorund from "../assets/about-background1.jpg"
import AboutBackgorundImage from "../assets/about-image.png"

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackgorund} alt="delicious donuts"/>
            </div>

            <div className="about-section-image-container">
                <img src={AboutBackgorundImage} alt="donnut in hands"/>
            </div>

            <div className="about-section-text-container">
                <p className="primary-subheading">
                    About us
                </p>
                <h1 className="primary-heading">It's important to know who feeds you...</h1>
                <p className="primary-text">
                    We are a local donnut store dedicated to bring 
                    to you the most delicious donnuts in the city.
                </p>
                <p className="primary-text">
                    Our story started with love, passion and 
                    the desire to create a place where friends 
                    and family could be together in the sweetest moments 
                </p>

                <div className="about-buttons-container">
                    <button className="secondary-button">Read More</button>
                    <button className="watch-video-button"> <BsFillPlayCircleFill />
                    Watch our Video</button>
                </div>
            </div>
        </div>
    )
}

export default About