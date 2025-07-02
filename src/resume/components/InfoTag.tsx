interface InfoTagProps {
  text: string
  url?: string
  icon?: string
}

function InfoTag({ text, url, icon }: InfoTagProps) {
  return (
    <div className="info-tag-container">
      {icon && <i className={`fa ${icon}`} />}
      <h6 className="info-text">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </h6>
    </div>
  )
}

export default InfoTag
