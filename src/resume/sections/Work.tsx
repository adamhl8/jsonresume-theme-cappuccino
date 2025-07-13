import { resume } from "@/index.js"
import Title from "@/resume/components/Title.js"
import { removeProtocol } from "@/utils.js"

const Work = () => {
  const { work } = resume
  if (!work || work.length === 0) return

  return (
    <div>
      <Title title="Experience" />

      <div className="space-y-3.5">
        {work.map((job, index) => (
          <div key={index} className="space-y-2">
            <header>
              <div className="font-bold text-md/tight">{job.position}</div>

              <div className="space-x-1.5 text-sm/tight">
                <span className="font-bold text-secondary">{job.name}</span>
                {job.url && (
                  <span className="space-x-1.5 font-lighter text-[dimgray] text-xs/tight">
                    <span>&#8226;</span>
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {removeProtocol(job.url)}
                    </a>
                  </span>
                )}
                <span>|</span>
                <span className="font-lighter italic">
                  {job.startDate} - {job.endDate}
                </span>
              </div>
            </header>

            <div className="space-y-1">
              {job.summary && <p className="text-smaller/3.5">{job.summary}</p>}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-inside list-disc text-smaller/3.5">
                  {job.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
