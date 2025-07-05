import InfoTag from "@/resume/components/InfoTag.js"

type Profiles = {
  network?: string
  username?: string
  url?: string
}

interface SocialProps {
  profiles: Profiles[]
}

function Social({ profiles }: SocialProps) {
  // biome-ignore lint/nursery/useIterableCallbackReturn: ignore
  const profilesArray = profiles.map((profile) => {
    if (!(profile.username && profile.url)) return

    if (profile.network?.toLowerCase() === "linkedin") {
      return <InfoTag key={profile.network} text={profile.username} icon="fa-linkedin-square" url={profile.url} />
    }
    return (
      <InfoTag
        key={profile.network}
        text={profile.username}
        icon={`fa-${profile.network?.toLowerCase()}`}
        url={profile.url}
      />
    )
  })
  return profilesArray
}

export default Social
