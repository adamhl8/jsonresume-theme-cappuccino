import { resume } from "@/index.js"
import { formatAddress } from "@/utils.js"
import InfoTag from "@/resume/components/InfoTag.js"
import Social from "@/resume/components/Social.js"
import Title from "@/resume/components/Title.js"

function About() {
  if (!resume.basics) return

  const location = formatAddress(
    resume.basics.location?.address,
    resume.basics.location?.city,
    resume.basics.location?.region,
    resume.basics.location?.postalCode,
    resume.basics.location?.countryCode,
  )

  return (
    <div className="container about-container">
      <Title title="About" />

      {resume.basics.location && <InfoTag text={location} icon="fa-map-marker" />}
      {resume.basics.email && (
        <InfoTag text={resume.basics.email} url={`mailto:${resume.basics.email}`} icon="fa-envelope-o" />
      )}
      {resume.basics.phone && (
        <InfoTag text={resume.basics.phone} url={`tel:${resume.basics.phone}`} icon="fa-mobile" />
      )}
      {resume.basics.url && <InfoTag text={resume.basics.url} url={resume.basics.url} icon="fa-globe" />}
      {resume.basics.profiles && <Social profiles={resume.basics.profiles} />}
    </div>
  )
}

export default About
