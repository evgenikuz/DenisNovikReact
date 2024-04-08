import './MobileMenu.css'
import CloseBtn from './close.svg'

function MobileMenu() {
    return (
        <div className="mobile d-none">
        <nav className="mobile_nav">
            <a className="item navHome" href="#home">Home</a>
            <a className="item navAbout" href="#about-me">About me</a>
            <a className="item navSkills" href="#skills">Skills</a>
            <a className="item navPortfolio" href="#portfolio">Portfolio</a>
            <a className="item navContacts" href="#contacts">Contacts</a>
        </nav>
        <button className="close-btn item"><img src={CloseBtn} alt="Кнопка закрытия" onClick={hideMobileMenu}/>
        </button>
    </div>
    )
}

export default MobileMenu

function hideMobileMenu() {
    let item = document.querySelectorAll('.item');
    item.forEach(el => {
        el.addEventListener('click', function() {
            document.querySelector('.mobile').classList.add('d-none');
        })
    })
}