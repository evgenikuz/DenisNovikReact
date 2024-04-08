import './Skills.css'
import Ps from '../SkillCard/img/Ps.jpg';
import Ae from '../SkillCard/img/Ae.jpg';
import Ai from '../SkillCard/img/Ai.jpg';
import Figma from '../SkillCard/img/Figma.png';
import SkillCard from '../SkillCard/SkillCard';

// "#070707" = black
// "#E5E5E5" = gray

function Skills({picture, skillName, alt, st1, st2, st3, st4, st5}) {
    return (
        <div className="section" id="skills">
            <div className="container">
                <h2>Skills</h2>
                <p className="text-skills">I work in such programs as</p>
                <div className="skills-container">
                    <SkillCard picture={Ps} alt="Adobe Photoshop" skillName='Adobe Photoshop' st5="#E5E5E5"/>
                    <SkillCard picture={Ai} alt="Adobe Illustrator" skillName='Adobe Illustrator' st4="#E5E5E5" st5="#E5E5E5"/>
                    <SkillCard picture={Ae} alt="Adobe After Effects" skillName='Adobe After Effects' st5="#E5E5E5"/>
                    <SkillCard picture={Figma} alt="Figma" skillName='Figma' st5="#E5E5E5"/>
                </div>
            </div>
        </div>
    )
}

export default Skills