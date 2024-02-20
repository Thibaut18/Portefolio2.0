import  { useRef } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/maincontainer.scss"
import "../styles/content.scss"

function GlobalLayout() {
    const mainContainerRef = useRef(null);

    return (
        <div ref={mainContainerRef} className='main-container'>
        
                <Header mainContainerRef={mainContainerRef} />
                <div className="content">
                <Outlet />
                </div>
                <Footer />
       
        </div>
    );
}

export default GlobalLayout;