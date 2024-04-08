import './Header.css';
import HamburgerMenu from './hamburger-menu.svg'

function Header() {
  return (
    <div className="menu" id="header">
        <nav className="desktop">
            <ul>
                <li><a className="item" href="#home">Home</a></li>
                <li><a className="item" href="#about-me">About me</a></li>
                <li><a className="item" href="#skills">Skills</a></li>
                <li><a className="item" href="#portfolio">Portfolio</a></li>
                <li><a className="item" href="#contacts">Contacts</a></li>
            </ul>
            <hr/>
        </nav>
        <button className="burger"><img src={HamburgerMenu} alt="Кнопка бургера" onClick={showMobileMenu}/></button>
    </div>
  );
}

export default Header;

function showMobileMenu() {
  document.querySelector('.mobile').classList.remove('d-none');
}