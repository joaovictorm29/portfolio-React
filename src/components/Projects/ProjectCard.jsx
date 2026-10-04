function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.id === 'atualiza-fipe' ? 'atualiza-fipe' : ''}`}>
      {project.image && <img className="project-card__image" src={project.image} alt={`Tela do projeto ${project.title}`} />}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.url && (
        <a href={project.url} target="_blank" rel="noreferrer">
          Ver repositório
        </a>
      )}
      {project.urlDemo && (
        <a href={project.urlDemo} target="_blank" rel="noreferrer">
          Ver demonstração
        </a>
      )}
    </article>
  )
}

export default ProjectCard