import { renderToStaticMarkup } from "react-dom/server";
import { ResumeSchema } from "./ResumeSchema.js";
import { Resume } from "./resume/Resume.js";

//

// function render(resume: any): string {
//   const css = fs.readFileSync(path.join(import.meta.dirname, "style.css"), "utf-8");
//   const data = {
//     resume,
//     css,
//   };

//   const eta = new Eta({
//     views: path.join(import.meta.dirname, "templates"),
//     plugins: [helpersPlugin(helpers)],
//   });
//   const html = eta.render("/resume", data);
//   console.log(html);
//   return html;
// }

let resume: ResumeSchema;

function render(resumeJSON: ResumeSchema): string {
  resume = resumeJSON;
  const markup = renderToStaticMarkup(Resume());
  return markup;
}

export { render, resume };
