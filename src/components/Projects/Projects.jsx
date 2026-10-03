import projects from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <h2>Projetos</h2>
      {projects.length > 0 ? (
        <div className="projects-section__list">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : (
        <p>Novos projetos de desenvolvimento web serão publicados aqui em breve.</p>
      )}
    </section>
  )
}

export default Projects