import { renderToStaticMarkup } from "react-dom/server"

import type { ResumeSchema } from "@/ResumeSchema.js"
import { Resume } from "@/resume/Resume.js"

let resume: ResumeSchema

function render(resumeJSON: ResumeSchema): string {
  resume = resumeJSON
  const markup = renderToStaticMarkup(Resume())
  return markup
}

export { render, resume }
