import type { TablerIcon } from "@tabler/icons-react"
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconFileUnknown } from "@tabler/icons-react"

import InfoTag from "@/resume/components/InfoTag.js"

type Profiles = {
  network?: string
  username?: string
  url?: string
}

interface SocialProps {
  profiles: Profiles[]
}

const iconMap: Record<string, TablerIcon> = {
  github: IconBrandGithubFilled,
  linkedin: IconBrandLinkedinFilled,
}

function Social({ profiles }: SocialProps) {
  // biome-ignore lint/nursery/useIterableCallbackReturn: ignore
  const profilesArray = profiles.map((profile, index) => {
    if (!(profile.network && profile.username && profile.url)) return

    return (
      <InfoTag
        key={index}
        text={profile.username}
        Icon={iconMap[profile.network.toLowerCase()] ?? IconFileUnknown}
        url={profile.url}
      />
    )
  })
  return profilesArray
}

export default Social
