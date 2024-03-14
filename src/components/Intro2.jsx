import { useNavigate } from 'react-router-dom';
import meCoding from "../assets/Images/meCoding.webp"
import "../styles/intro2.scss"
import {
    AiFillGithub,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

function Intro2 () {
    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <section className="intro2-section">
            <div className="intro2-section-h2-ul-p">
                <h2>Bienvenue sur mon <span className="span-word">portefolio !</span></h2>
                <ul>
                  <li className='li-style-none'>Sur ce <span className="span-word">site </span>vous pouvez :</li>
                     <li>en apprendre plus sur <span className="span-word">moi</span> et mes <span className="span-word">skills</span> techniques dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/about')}>"À Propos"</span></li> 
                     <li>jeter un oeil à <span className="span-word">mes réalisations</span> dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/projects')}>"Projets"</span></li>
                     <li>me contacter via <span className="span-word">le formulaire</span> disponible dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/contact')}>"Contact"</span></li> 
                     <li>prendre connaissance de <span className="span-word">mon CV </span> et le <span className="span-word">télécharger</span> dans la section <span className="span-word nav-word" onClick={() => handleNavigation('/cv')}>"Mon CV"</span></li></ul>
            <p>Bonne navigation !</p>
            <img src="https://media.tenor.com/lZE8tZGKLQ4AAAAi/saturn-v-space.gif" alt="gif d'un spationaute accroché à sa fusée" className="rocket-man"/>
</div>
<div className='intro2-coding-pic-social-links'>
<div className="intro2-coding-pic">
<img src={meCoding} alt="Le créateur de se portefolio en train de développer"/>
</div>
<ul className="intro2-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Thibaut18"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  title="Visitez mon profil GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thibaut-teinturier-077b87174/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  title="Visitez mon profil LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                </li>
                </ul>
                </div>
</section>
    );
}

export default Intro2