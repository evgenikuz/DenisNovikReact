function PortfolioElement({img, alt, SiteName}) {
    return ( 
    <a href="#"><img src={img} alt={alt} />
    <div className="link">{SiteName}</div></a>
    )
}

export default PortfolioElement