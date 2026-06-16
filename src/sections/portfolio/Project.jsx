import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
            {project.category && <span className="portfolio__project-tag">{project.category}</span>}
        </div>
        <h4>{project.title}</h4>
        <p className='para-project'>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </Card>
  )
}

export default Project
