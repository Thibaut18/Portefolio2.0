import Navbar from "../components/Navbar.jsx";
import "../styles/header.scss";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ mainContainerRef }) {

    const navigate = useNavigate(); 

    const handleNavigation = (path) => {
        navigate(path);
    };
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            const currentScrollTop = mainContainerRef.current.scrollTop;

            if (currentScrollTop > 0) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        const mainContainer = mainContainerRef.current;

        if (mainContainer) {
            mainContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainContainer) {
                mainContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, [mainContainerRef]);

    return (
        <header className="header">
            <p className="header-logo"  onClick={() => handleNavigation('/homepage')}>TT</p>
            <Navbar />
        </header>
    );
}

export default Header;

