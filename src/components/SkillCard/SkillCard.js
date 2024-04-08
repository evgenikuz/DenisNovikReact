import './SkillCard.css'
import Star from '../Star/Star'


function SkillCard({picture, skillName, alt, st1, st2, st3, st4, st5}) {
    return (
        <div className="skill-card">
            <img src={picture} alt={alt}/>
            <p className="skill-name">{skillName}</p>
            <div className="level-of-skill">
                <Star color={st1}/>
                <Star color={st2}/>
                <Star color={st3}/>
                <Star color={st4}/>
                <Star color={st5}/>
            </div>
        </div>
    )
}

export default SkillCard
