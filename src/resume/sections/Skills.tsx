import { resume } from "@/index.js"
import Title from "@/resume/components/Title.js"

function Skills() {
  const { skills } = resume
  if (!skills || skills.length === 0) return

  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index}>
          {skill.name && <Title title={skill.name} />}

          {skill.keywords && skill.keywords.length > 0 && (
            <div className="flex flex-wrap">
              {skill.keywords.map((keyword, index) => (
                <span key={index} className="m-[0.15rem] rounded-sm bg-[ghostwhite] p-[0.15rem] text-sm/tight">
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Skills
