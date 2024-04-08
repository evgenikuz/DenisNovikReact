import PortfolioElement from '../PortfolioElement/PortfolioElement'
import './Portfolio.css'
import braun from '../Portfolio/img/Braun.jpg'
import fashionStore from '../Portfolio/img/fashion-store.jpg'
import reebok from '../Portfolio/img/reebok.jpg'

function Portfolio({img, alt, SiteName}) {
    return (
        <div className="section gray" id="portfolio">
        <div className="container">
            <div className="portfolio">
                <h2>Portfolio</h2>
                <PortfolioElement  img={fashionStore} alt="Homepage of an online fashion store" SiteName='Online fashion store - Homepage'/>
                <PortfolioElement img={reebok} alt="Homepage of Reebok store" SiteName='Reebok Store - Concept'/>
                <PortfolioElement img={braun} alt="Homepage of Braun store" SiteName='Braun Landing Page - Concept'/>
            </div>
        </div>
    </div>
    )
}

export default Portfolio