import Navbar from "./Navbar"
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"


const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="Background home container"/>
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your favorite donut in your home!    
                    </h1>
                    <p className="primary-text">
                        Different flavors to make your moments more delicious. Order now and get a surprise.
                    </p>

                    <button className="secondary-button">
                        Place an Order <FiArrowRight/>
                    </button>

                    <p className="primary-text">
                        Or you can come and enjoy our donnuts in a cozy ambient with us.
                    </p>
                </div>
                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img src={BannerImage} alt="donuts"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home