import { resume } from "@/index.js"
import Title from "@/resume/components/Title.js"

function Skills() {
  if (resume.skills?.length === 0) return null

  return (
    <div className="skills-container">
      {resume.skills?.map((skill) => (
        <section className="container" key={skill.name}>
          {skill.name && <Title title={skill.name} />}
          {skill.level && <h4 className="bold capitalize">{skill.level}</h4>}
          {skill.keywords && skill.keywords.length > 0 && (
            <div className="minimal flex-container">
              {skill.keywords.map((keyword) => (
                <h6 className="main-skill skill" key={keyword}>
                  {keyword}
                </h6>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default Skills
