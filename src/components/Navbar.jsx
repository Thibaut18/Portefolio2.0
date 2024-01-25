import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.scss"

function Navbar() {
    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">
                <li className="header-nav-li"><FontAwesomeIcon icon={faHome} /> Home </li>
                <li className="header-nav-li"><FontAwesomeIcon icon={faUser} /> About</li>
                <li className="header-nav-li"><FontAwesomeIcon icon={faBriefcase} /> Projects </li>
				<li className="header-nav-li"><FontAwesomeIcon icon={faEnvelope} /> Contact </li>
            </ul>
        </nav>
    );
}


export default Navbar;
