import PortfolioElement from '../PortfolioElement/PortfolioElement'
import './Portfolio.css'
import braun from '../Portfolio/img/Braun.jpg'
import fashionStore from '../Portfolio/img/fashion-store.jpg'
import reebok from '../Portfolio/img/reebok.jpg'
import { useState } from 'react'
import Button from '../Button/Button'


function Portfolio() {
    let [emptySpace, example] = useState()
    return (
        <div className="section gray" id="portfolio">
        <div className="container">
            <div className="portfolio">
                <h2>Portfolio</h2>
                <div className="button-container">
                    <Button buttonText="Fashion store" action={() => example(<PortfolioElement  img={fashionStore} alt='Homepage of an online fashion store' SiteName='Online fashion store - Homepage'/>)}/>
                    <Button buttonText="Braun" action={() => example(<PortfolioElement img={reebok} alt="Homepage of Reebok store" SiteName='Reebok Store - Concept'/>)}/>
                    <Button buttonText="Reebok" action={() => example(<PortfolioElement img={braun} alt="Homepage of Braun store" SiteName='Braun Landing Page - Concept'/>)}/>
                </div>
                {emptySpace}
            </div>
        </div>
    </div>
    )
}

export default Portfolio

