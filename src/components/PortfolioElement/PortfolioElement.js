import './PortfolioElement.css'
import CloseBtn from './close.svg'

function PortfolioElement({img, alt, SiteName}) {
    return ( 
    <div className="portfolio__element">
        <button className="close-btn"><img src={CloseBtn} alt="Кнопка закрытия" onClick={closePicture}/></button>
        <a href="#">
            <img src={img} alt={alt} />
            <div className="link">{SiteName}</div>
        </a>
    </div>
    
    )
}

export default PortfolioElement

function closePicture() {
    document.querySelector('.portfolio__element').innerHTML('');
}