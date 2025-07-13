import { IconMailFilled, IconMapPinFilled, IconPhoneFilled, IconWorld } from "@tabler/icons-react"

import { resume } from "@/index.js"
import InfoTag from "@/resume/components/InfoTag.js"
import Social from "@/resume/components/Social.js"
import Title from "@/resume/components/Title.js"
import { removeProtocol } from "@/utils.js"

function About() {
  const { basics } = resume
  if (!basics) return

  const location = [
    basics.location?.address,
    basics.location?.city,
    basics.location?.region,
    basics.location?.postalCode,
    basics.location?.countryCode,
  ]
    .filter(Boolean)
    .join(", ")

  return (
    <div>
      <Title title="About" />

      {basics.location && <InfoTag text={location} Icon={IconMapPinFilled} />}
      {basics.email && <InfoTag text={basics.email} url={`mailto:${basics.email}`} Icon={IconMailFilled} />}
      {basics.phone && <InfoTag text={basics.phone} url={`tel:${basics.phone}`} Icon={IconPhoneFilled} />}
      {basics.profiles && <Social profiles={basics.profiles} />}
      {basics.url && <InfoTag text={removeProtocol(basics.url)} url={basics.url} Icon={IconWorld} />}
    </div>
  )
}

export default About
