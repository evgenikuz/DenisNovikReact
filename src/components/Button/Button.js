import './Button.css'

export default function Button({action, buttonText}) {
    return (
        <button className="portfolio__button" onClick={action}>{buttonText}</button>
    )
}