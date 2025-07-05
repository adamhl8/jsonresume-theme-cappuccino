import type React from "react"

import { formatDate, removeProtocol } from "@/utils.js"

interface SectionHeaderProps {
  name?: string
  website?: string
  showWebsite?: boolean
  startDate?: string
  endDate?: string
  releaseDate?: string
  description?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  name,
  website,
  showWebsite,
  startDate,
  endDate,
  releaseDate,
  description,
}) => {
  return (
    <div className="section-header clearfix">
      {name && (
        <h3 className="bold pull-left">
          {website ? (
            <a href={website} target="_blank" rel="noreferrer">
              {name}
              {showWebsite && (
                <span className="sublink">
                  ∙{" "}
                  <a href={website} target="_blank" rel="noreferrer" className="sublink">
                    {removeProtocol(website)}
                  </a>
                </span>
              )}
            </a>
          ) : (
            name
          )}
        </h3>
      )}
      <h5 className="pull-right italic">
        {startDate ? (
          <>
            <span className="startDate">{formatDate(startDate)}</span>
            <span className="endDate"> - {endDate ? formatDate(endDate) : "Present"}</span>
          </>
        ) : undefined}
        {!startDate && releaseDate ? formatDate(releaseDate) : null}
      </h5>
      {description && <h4>{description}</h4>}
    </div>
  )
}

export default SectionHeader
