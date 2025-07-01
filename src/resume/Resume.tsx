import fs from "node:fs"
import path from "node:path"
import { resume } from "../index.js"
import ResumeHeader from "./components/ResumeHeader.js"
import About from "./sections/About.js"
import Education from "./sections/Education.js"
import Projects from "./sections/Projects.js"
import Skills from "./sections/Skills.js"
import Work from "./sections/Work.js"

const css = fs.readFileSync(path.join(import.meta.dirname, "style.css"), "utf-8")

function Resume() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui" />
        <title>{resume.basics?.name}</title>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>

      <body>
        <main id="resume" className="page">
          <ResumeHeader />
          <div className="resume-content">
            <aside className="left-column">
              <About />
              <Education />
              <Skills />
            </aside>
            <div className="right-column">
              <Work />
              <Projects />
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

export { Resume }
