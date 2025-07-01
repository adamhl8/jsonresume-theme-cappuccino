import { resume } from "../../index.js"
import Title from "../components/Title.js"

function Skills() {
  if (!resume.skills?.length) return null

  return (
    <div className="skills-container">
      {resume.skills.map((skill, index) => (
        <section className="container" key={index}>
          {skill.name && <Title title={skill.name} />}
          {skill.level && <h4 className="bold capitalize">{skill.level}</h4>}
          {skill.keywords?.length && (
            <div className="minimal flex-container">
              {skill.keywords.map((keyword, keywordIndex) => (
                <h6 className="main-skill skill" key={keywordIndex}>
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
