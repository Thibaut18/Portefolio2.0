import { useNavigate } from 'react-router-dom';
import meCoding from "../assets/Images/meCoding.webp"
import "../styles/intro2.scss"

function Intro2 () {
    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <section className="intro2-section">
            <div className="intro2-section-h2-ul-p">
                <h2>Bienvenue sur mon <span className="span-word">portefolio !</span></h2>
                <ul>Sur ce <span className="span-word">site </span>vous pouvez :
                     <li>en apprendre plus sur <span className="span-word">moi</span> et mes <span className="span-word">skills</span> techniques dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/about')}>"À Propos"</span></li> 
                     <li>jeter un oeil à <span className="span-word">mes réalisations</span> dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/projects')}>"Projets"</span></li>
                     <li>me contacter via <span className="span-word">le formulaire</span> disponible dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/contact')}>"Contact"</span></li> </ul>
            <p>Bonne navigation !</p>
            <img src="https://media.tenor.com/lZE8tZGKLQ4AAAAi/saturn-v-space.gif" className="rocket-man"/>
</div>
<div className="intro2-coding-pic">
<img src={meCoding} alt="Le créateur de se portefolio en train de développer"/>
</div>
</section>
    );
}

export default Intro2