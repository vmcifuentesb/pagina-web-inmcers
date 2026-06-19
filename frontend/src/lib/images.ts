const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "")

export function img(path: string): string {
  return `${BASE}${path}`
}
