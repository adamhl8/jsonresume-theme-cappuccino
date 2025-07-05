function removeProtocol(url: string) {
  return url.replace(/.*?:\/\//g, "")
}

function concat(...args: unknown[]) {
  return args.filter((arg) => typeof arg !== "object").join("")
}

function formatAddress(...args: unknown[]) {
  return args.filter((arg) => arg && typeof arg !== "object").join(", ")
}

function formatDate(date: Date | string) {
  return date.toString()
}

function lowercase(s: string) {
  return s.toLowerCase()
}

function eq(a: unknown, b: unknown) {
  return a === b
}

export { concat, eq, formatAddress, formatDate, lowercase, removeProtocol }
