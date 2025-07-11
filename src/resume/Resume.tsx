import * as fs from "node:fs"
import * as path from "node:path"

import { resume } from "@/index.js"
import About from "@/resume/sections/About.js"
import Education from "@/resume/sections/Education.js"
import Projects from "@/resume/sections/Projects.js"
import Skills from "@/resume/sections/Skills.js"
import Work from "@/resume/sections/Work.js"

const css = fs.readFileSync(path.join(import.meta.dirname, "global.css"), "utf-8")

function Resume() {
  const { basics } = resume
  if (!basics) return

  return (
    <html className="bg-white font-semimedium text-base/tight text-primary" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui" />
        <title>{basics.name}</title>
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: this is intentional */}
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>

      <body className="mt-10 mb-10 grid grid-cols-1 justify-items-center print:m-0">
        <main className="w-[815px] p-12 shadow-[0_0_25px_rgba(0,0,0,0.25)] print:w-full print:p-0 print:shadow-none">
          <div className="mb-4 border-secondary border-t-8" />

          <h1 className="font-bold text-4xl/tight">{basics.name}</h1>
          <h2 className="font-bold text-lg/tight text-secondary">{basics.label}</h2>

          <div className="mt-4 grid grid-cols-7 space-x-4">
            <section className="col-span-2 space-y-6">
              <About />
              <Education />
              <Skills />
            </section>
            <section className="col-span-5 space-y-4">
              <Work />
              <Projects />
            </section>
          </div>
        </main>
      </body>
    </html>
  )
}

export { Resume }
