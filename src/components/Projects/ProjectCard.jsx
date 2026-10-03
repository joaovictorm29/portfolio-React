function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.url && <a href={project.url}>Ver projeto</a>}
    </article>
  )
}

export default ProjectCard