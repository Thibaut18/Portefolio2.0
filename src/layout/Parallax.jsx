import { useState, useEffect } from 'react';
import '../styles/parallax.scss';
import parallaxImg from "../assets/Images/parallaxImg.jpg"

const Parallax = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundImage = parallaxImg; 

  return (
    <div
      className="parallax"
      style={{ backgroundImage: `url(${backgroundImage})`, transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Parallax;