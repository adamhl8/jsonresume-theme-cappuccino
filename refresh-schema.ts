import * as fs from "node:fs/promises"
import { compileFromFile } from "json-schema-to-typescript"

const response = await fetch("https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json")
const rawSchema = await response.text()
await Bun.write("./tmp/schema.json", rawSchema)

const schema = await compileFromFile("./tmp/schema.json", { maxItems: -1 })
await Bun.write("./src/ResumeSchema.d.ts", schema)

await fs.rm("./tmp/", { force: true, recursive: true })
