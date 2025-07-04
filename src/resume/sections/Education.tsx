import { resume } from "@/index.js"
import Title from "@/resume/components/Title.js"

function Education() {
  if (!resume.education?.length) return null

  return (
    <div className="container education-container">
      <Title title="Education" />
      {resume.education.map((education, index) => (
        <section className="item" key={index}>
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

          {education.courses?.length && (
            <ul className="two-column">
              {education.courses.map((course, courseIndex) => (
                <li key={courseIndex}>{course}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export default Education
