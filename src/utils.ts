export function removeProtocol(url: string) {
  return url.replace(/.*?:\/\//g, "")
}
