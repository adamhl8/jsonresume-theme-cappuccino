import { resume } from "@/index.js"
import SectionHeader from "@/resume/components/SectionHeader.js"
import Title from "@/resume/components/Title.js"

const Work = () => {
  const work = resume.work
  if (!work) return
  if (resume.work?.length === 0) return null

  return (
    <div className="work-container container">
      <Title title="Experience" />
      {work.map((job) => (
        <section className="item" key={job.name}>
          <SectionHeader name={job.position || ""} />
          <h4>
            <span className="secondary bold">{job.name}</span> |{" "}
            <i>
              {job.startDate} - {job.endDate}
            </i>
          </h4>
          {job.summary && <p className="summary">{job.summary}</p>}
          {job.highlights && job.highlights.length > 0 && (
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export default Work
