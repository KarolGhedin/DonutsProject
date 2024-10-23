import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouseFloodWater, faTruck, faUtensils} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
    const workInfoData = [
        {
            image: <FontAwesomeIcon icon={faHouseFloodWater} />,
            title:"Feels just like homemade",
            text: "Every donut are made with care and full attention to each detail as if it is made in your homemade. We use traditional recipes and handmade techniques to make fresh and tasty donuts, witch bring to life the best moments in family.",

        },
        {
            image: <FontAwesomeIcon icon={faUtensils} />,
            title:"Selected Igredients",
            text: "At our bakery, we pride ourselves on crafting the best donuts using only the finest ingredients. We start with premium flour to ensure a light and fluffy texture, carefully selecting high-quality butter and fresh eggs to add richness and depth of flavor. Our milk is always fresh, providing the perfect moisture balance, while our yeast is chosen for its ability to give the donuts a perfect rise and tenderness.",
        },
        {
            image: <FontAwesomeIcon icon={faTruck} />,
            title:"We Deliver in the Entire City",
            text: "At our bakery, we take great care in delivering our delicious donuts to every corner of the city. From the moment they leave our ovens, each donut is handled with the utmost attention to maintain their freshness and quality. Our delivery process is designed to ensure that your order arrives in perfect condition, whether you're in the heart of downtown or on the outskirts of the city.",
        }
    ]


    return (
        <div className="work-section-wrapper">
            <div className="work-section-tap">
                <p className="primary-subheading">Our Services</p>
                <h1>How we work for you</h1>
                <p className="primary-text">
                    Our mission is to give you a delitefull experience.
                    Since the carefull selection of ingredients t the delivery 
                    at your home, each task is made to ensure that you receive 
                    the best donnuts in the city. We are comitted to a high quality
                    standart for your satisfaction
                </p>
            </div>

            <div className="work-section-button">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">{data.image}</div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
              ))}
            </div>
        </div>
    )
}

export default Services