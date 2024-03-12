import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; 
import "../styles/projectsitems.scss";

function ProjectsItems({ title, subtitle, imgSrc, alt, repoUrl, demoUrl }) {
    return (
        <div className="projects-item">
            <img src={imgSrc} alt={alt} className="projects-item-img" />
            <div className="projects-item-info">
                <h2 className="projects-item-title">{title}</h2>
                <p className="projects-item-subtitle">{subtitle}</p>
                <div className="projects-item-btns">
                    <button className='projects-btns'><a href={repoUrl} target="_blank" rel="noopener noreferrer" className="projects-btns-link">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a></button>
                    {demoUrl && (
                        <button className='projects-btns'><a href={demoUrl} target="_blank" rel="noopener noreferrer" className="projects-btns-link">
                            <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                        </a></button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectsItems;