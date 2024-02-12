import ProjectsItems from '../components/ProjectsItems';
import projectsData from '../data/ProjectData'; 
import "../styles/projects.scss"

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-section-title">Mes <span className='span-word'>Projets</span> Récents</h1>
      <div className="projects-section-items">
        {projectsData.map((project, index) => {
          return ( 
            <ProjectsItems
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imgSrc={project.imgSrc} 
              alt={project.alt}
              repoUrl={project.repoUrl}
              demoUrl={project.demoUrl} 
              
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;