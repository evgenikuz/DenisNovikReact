import './Contacts.css'
import LinkedIn from "./icons/linkedin.svg"
import Instagram from "./icons/instagram.svg"
import Behance from "./icons/behance.svg"
import Dribble from "./icons/dribble.svg"


function Contacts() {
    return (
        <div className="section" id="contacts">
        <div className="container">
            <h2>Contacts</h2>
            <p className="text">Want to know more or just chat? 
            <br/>You are welcome!</p>
            <button name="contact me" className="contact-btn">Send message</button>
            <div className="icons-container">
                <a href=''><img src={LinkedIn} alt="LinkedIn"/></a>
                <a href=''><img src={Instagram} alt="Instagram"/></a>
                <a href=''><img src={Behance} alt="Bahance"/></a>
                <a href=''><img src={Dribble} alt="Dribble"/></a>
            </div>
            <p className="hint text">Like me on <br/>
                LinkedIn, Instagram, Behance, Dribble</p>
        </div>
    </div>
    )
}

export default Contacts