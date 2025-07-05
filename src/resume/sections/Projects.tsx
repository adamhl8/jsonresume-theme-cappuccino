import { resume } from "@/index.js"
import SectionHeader from "@/resume/components/SectionHeader.js"
import Title from "@/resume/components/Title.js"

const Projects = () => {
  const projects = resume.projects
  if (projects?.length === 0) return null

  return (
    <div className="project-container container">
      <Title title="Open Source Projects" />
      {projects?.map((project) => (
        <section className="item" key={project.name}>
          <SectionHeader name={project.name || ""} website={project.url || ""} showWebsite={true} />
          {project.keywords && project.keywords.length > 0 && (
            <div className="flex-container">
              {project.keywords.map((keyword) => (
                <h6 className="skill" key={keyword}>
                  {keyword}
                </h6>
              ))}
            </div>
          )}
          {project.description && <p className="summary">{project.description}</p>}
          {project.highlights && project.highlights.length > 0 && (
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export default Projects
