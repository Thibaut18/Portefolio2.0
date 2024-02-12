import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import "../styles/navbar.scss"

function Navbar() {
    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">
                <li className="header-nav-li" onClick={() => handleNavigation('/homepage')}><FontAwesomeIcon icon={faHome} /> Home </li>
                <li className="header-nav-li"><FontAwesomeIcon icon={faUser} /> About</li>
                <li className="header-nav-li" onClick={() => handleNavigation('/projects')}><FontAwesomeIcon icon={faBriefcase} /> Projects </li>
                <li className="header-nav-li" onClick={() => handleNavigation('/contact')}><FontAwesomeIcon icon={faEnvelope} /> Contact </li>
            </ul>
        </nav>
    );
}

export default Navbar;
