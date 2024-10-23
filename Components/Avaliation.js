import ProfilePic from "../assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Avaliation = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-tap">
                <p className="primary-subheading">Avaliations</p>
                <h1 className="primary-heading">Our Reviews</h1>
                <p className="primary-text">
                Many have shared how our donuts are always fresh, and the unique, handcrafted glazes and fillings keep them coming back for more. Clients have praised not only the quality of our donuts but also the warm and friendly service they receive every time they visit. 
                </p>
            </div>

            <div className="avaliation-section-botton">
                <img src={ProfilePic} alt="Client"/>
                <p>
                "I recently visited this donut store, and I have to say, it's hands down the best in town! The donuts are always soft  and perfectly sweet. They offer such a great variety of flavors—every visit feels like a new experience! The staff is super friendly, and the service is quick, even during busy hours. 
                </p>
            </div>

            <div className="avaliation-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Wishop</h2>
        </div>
    )
}

export default Avaliation