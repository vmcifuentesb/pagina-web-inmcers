import { useEffect } from "react"

export function useTheme() {
  const dark = true;

  useEffect(() => {
    const root = document.documentElement
    root.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }, [])

  const toggle = () => {
    // No-op to preserve interface API but disable toggling
  }

  return { dark, toggle }
}
