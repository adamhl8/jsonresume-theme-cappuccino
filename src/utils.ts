function removeProtocol(url: string) {
  return url.replace(/.*?:\/\//g, "")
}

function concat(...args: any[]) {
  return args.filter((arg) => typeof arg !== "object").join("")
}

function formatAddress(...args: any[]) {
  return args.filter((arg) => arg && typeof arg !== "object").join(", ")
}

function formatDate(date: Date | string) {
  return date.toString()
}

function lowercase(s: string) {
  return s.toLowerCase()
}

function eq(a: any, b: any) {
  return a === b
}

export { concat, eq, formatAddress, formatDate, lowercase, removeProtocol }
