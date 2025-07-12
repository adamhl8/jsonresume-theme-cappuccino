import { renderToStaticMarkup } from "react-dom/server"

import type { ResumeSchema } from "@/ResumeSchema.js"
import { Resume } from "@/resume/Resume.js"

let resume: ResumeSchema

function render(resumeJSON: ResumeSchema): string {
  resume = resumeJSON
  let markup = renderToStaticMarkup(Resume())
  markup = `<!doctype html>\n${markup}`
  return markup
}

export { render, resume }
