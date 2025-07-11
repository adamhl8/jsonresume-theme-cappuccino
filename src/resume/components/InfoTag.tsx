import type { TablerIcon } from "@tabler/icons-react"

interface InfoTagProps {
  Icon: TablerIcon
  text: string
  url?: string
}

function InfoTag({ Icon, text, url }: InfoTagProps) {
  return (
    <div className="flex items-center space-x-1.5">
      {Icon && <Icon size={14} />}
      <span className="text-sm">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </div>
  )
}

export default InfoTag
