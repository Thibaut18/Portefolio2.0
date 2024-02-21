import { useState } from 'react';
import {
    DiHtml5,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
    DiSass,
    DiCss3,
  } from "react-icons/di";
  import '../styles/techstack.scss'
  import reduxIcon from '../assets/Images/skillsIcons/reduxIcon.svg'
  import figmaIcon from '../assets/Images/skillsIcons/figmaIcon.svg'
  import swaggerIcon from '../assets/Images/skillsIcons/swaggerIcon.svg'
  import vscodeIcon from '../assets/Images/skillsIcons/vscodeIcon.svg'
  import postmanIcon from '../assets/Images/skillsIcons/postmanIcon.svg'
  import viteIcon from '../assets/Images/skillsIcons/viteIcon.svg'
  import notionIcon from '../assets/Images/skillsIcons/notionIcon.svg'
  import npmIcon from '../assets/Images/skillsIcons/npmIcon.svg'

  const TechStack = () => {
    const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
  
    const handleMouseEnter = (e, text) => {
      const rect = e.target.getBoundingClientRect();
      setTooltip({ show: true, text, x: rect.left + (rect.width / 2), y: rect.top - 10 });
    };
  
    const handleMouseLeave = () => setTooltip({ show: false, text: '', x: 0, y: 0 });
  
    return (
      <section className="tech-stack-section">
        <h2>Mes <span className="span-word">Skills</span></h2>
        <div className="tech-stack-section-icons">
          <DiHtml5 className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'HTML5')} onMouseLeave={handleMouseLeave}/>
          <DiCss3 className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'CSS3')} onMouseLeave={handleMouseLeave}/>
          <DiJavascript1 className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'JavaScript')} onMouseLeave={handleMouseLeave}/>
          <DiReact className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'React')} onMouseLeave={handleMouseLeave}/>
          <img src={npmIcon} alt='Npm' className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'NodePackageManager')} onMouseLeave={handleMouseLeave}/>
          <DiGit className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Git')} onMouseLeave={handleMouseLeave}/>
          <DiSass className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Sass')} onMouseLeave={handleMouseLeave}/>
          <img src={reduxIcon} alt="Redux" className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Redux')} onMouseLeave={handleMouseLeave}/>
          <img src={swaggerIcon} alt="Swagger" className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Swagger')} onMouseLeave={handleMouseLeave}/>
        <img src={vscodeIcon} className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'VSCode')} onMouseLeave={handleMouseLeave}/>
        <img src={postmanIcon} className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Postman')} onMouseLeave={handleMouseLeave}/>
        <img src={figmaIcon} className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Figma')} onMouseLeave={handleMouseLeave}/>
        <img src={viteIcon} className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'ViteJS')} onMouseLeave={handleMouseLeave}/>
        <img src={notionIcon} className="tech-icons" onMouseEnter={(e) => handleMouseEnter(e, 'Notion')} onMouseLeave={handleMouseLeave}/>
        </div>
        {tooltip.show && (
        <div className="tooltip" style={{ top: `${tooltip.y}px`, left: `${tooltip.x}px` }}>
          {tooltip.text}
        </div>
        )}
      </section>
    );
  }
  
  export default TechStack;
