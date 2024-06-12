import { resume } from "../../index.js";
import SectionHeader from "../components/SectionHeader.js";
import Title from "../components/Title.js";

const Projects = () => {
  const projects = resume.projects;
  if (!projects?.length) return null;

  return (
    <div className="container project-container">
      <Title title="Open Source Projects" />
      {projects.map((project, index) => (
        <section className="item" key={index}>
          <SectionHeader name={project.name || ""} website={project.url || ""} showWebsite={true} />
          {project.keywords?.length && (
            <div className="flex-container">
              {project.keywords.map((keyword, idx) => (
                <h6 className="skill" key={idx}>
                  {keyword}
                </h6>
              ))}
            </div>
          )}
          {project.description && <p className="summary">{project.description}</p>}
          {project.highlights?.length && (
            <ul>
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default Projects;
