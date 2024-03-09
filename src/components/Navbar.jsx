import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/navbar.scss";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        const path = location.pathname; 
        if (path.includes('/homepage')) setActiveItem('Accueil');
        else if (path.includes('/about')) setActiveItem('À propos');
        else if (path.includes('/projects')) setActiveItem('Projets');
        else if (path.includes('/contact')) setActiveItem('Contact');
        else if (path.includes('/cv')) setActiveItem('Mon CV');
        else setActiveItem(''); 
    }, [location]); 

    const handleNavigation = (path, name) => {
        navigate(path);
        setActiveItem(name);
    };

    return (
        <nav className="header-nav">
            <ul className="header-nav-ul">
                {[
                { path: '/homepage', name: 'Accueil', icon: faHome },
                { path: '/about', name: 'À propos', icon: faUser },
                { path: '/projects', name: 'Projets', icon: faBriefcase },
                { path: '/contact', name: 'Contact', icon: faEnvelope },
                { path: '/cv', name: 'Mon CV', icon: faFileAlt },
                ].map((item) => (
                <li
                    key={item.name}
                    className={`header-nav-li ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => handleNavigation(item.path, item.name)}>
                    <FontAwesomeIcon icon={item.icon} /> {item.name}
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;