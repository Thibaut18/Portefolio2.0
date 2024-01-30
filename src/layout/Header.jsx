import Navbar from "../components/Navbar.jsx"
import "../styles/header.scss"
import 'animate.css';

function Header () {
    return (
        <div className="header">
        <p className=" header-logo">TT</p>
        <Navbar/>
        </div>
    );
}

export default Header;