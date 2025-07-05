import { resume } from "@/index.js"
import Title from "@/resume/components/Title.js"

function Education() {
  if (resume.education?.length === 0) return null

  return (
    <div className="education-container container">
      <Title title="Education" />
      {resume.education?.map((education) => (
        <section className="item" key={education.startDate}>
          <h4 className="bold pull-left">{education.institution}</h4>

          {education.studyType && education.area && (
            <h5>
              <span className="secondary bold">
                {education.studyType} {education.area}
              </span>
            </h5>
          )}

          {education.score ? (
            <h5>
              <i>GPA: {education.score}</i>
            </h5>
          ) : (
            <h5>
              <i>in progress</i>
            </h5>
          )}

          {education.courses && education.courses.length > 0 && (
            <ul className="two-column">
              {education.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export default Education
