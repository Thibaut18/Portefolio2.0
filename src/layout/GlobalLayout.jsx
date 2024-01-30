import  { useRef } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/maincontainer.scss"

function GlobalLayout() {
    const mainContainerRef = useRef(null);

    return (
        <div ref={mainContainerRef} className='main-container' id="main-container">
        
                <Header mainContainerRef={mainContainerRef} />
                <Outlet />
                <Footer />
       
        </div>
    );
}

export default GlobalLayout;