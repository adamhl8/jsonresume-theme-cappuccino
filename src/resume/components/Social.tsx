import InfoTag from "./InfoTag.js"

type Profiles = {
  network?: string
  username?: string
  url?: string
}

interface SocialProps {
  profiles: Profiles[]
}

function Social({ profiles }: SocialProps) {
  const profilesArray = profiles.map((profile) => {
    if (!profile.username || !profile.url) return

    if (profile.network?.toLowerCase() === "linkedin") {
      return <InfoTag text={profile.username} icon="fa-linkedin-square" url={profile.url} />
    }
    return <InfoTag text={profile.username} icon={`fa-${profile.network?.toLowerCase()}`} url={profile.url} />
  })
  return profilesArray
}

export default Social
