import { resume } from "@/index.js"
import SectionHeader from "@/resume/components/SectionHeader.js"
import Title from "@/resume/components/Title.js"

const Work = () => {
  const work = resume.work
  if (!work) return
  if (!resume.work?.length) return null

  return (
    <div className="container work-container">
      <Title title="Experience" />
      {work.map((job, index) => (
        <section className="item" key={index}>
          <SectionHeader name={job.position || ""} />
          <h4>
            <span className="secondary bold">{job.name}</span> |{" "}
            <i>
              {job.startDate} - {job.endDate}
            </i>
          </h4>
          {job.summary && <p className="summary">{job.summary}</p>}
          {job.highlights?.length && (
            <ul>
              {job.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export default Work
