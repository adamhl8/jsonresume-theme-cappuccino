import { resume } from "@/index.js"
import Title from "@/resume/components/Title.js"
import { removeProtocol } from "@/utils.js"

const Projects = () => {
  const { projects } = resume
  if (!projects || projects.length === 0) return

  return (
    <div>
      <Title title="Open Source Projects" />

      <div className="space-y-3.5">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <header className="space-x-1.5">
              <span className="font-bold text-md/tight">{project.name}</span>
              {project.url && (
                <span className="space-x-1.5 font-lighter text-[dimgray] text-xs/tight">
                  <span>&bull;</span>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {removeProtocol(project.url)}
                  </a>
                </span>
              )}
            </header>

            <div className="space-y-2">
              {project.keywords && project.keywords.length > 0 && (
                <div>
                  {project.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="mr-[0.15rem] ml-[0.15rem] rounded-sm bg-[ghostwhite] pr-[0.15rem] pl-[0.15rem] text-xs/tight leading-[1]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {project.description && <p className="text-smaller/3.5">{project.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
