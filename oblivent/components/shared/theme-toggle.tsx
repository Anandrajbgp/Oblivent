"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 data-[theme=system]:rotate-45 data-[theme=system]:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 data-[theme=system]:rotate-45 data-[theme=system]:scale-0" />
      <Monitor className="absolute h-4 w-4 rotate-90 scale-0 transition-all data-[theme=system]:rotate-0 data-[theme=system]:scale-100" />
      
      {/* Yahan hydration mismatch fix ho gaya */}
      <span className="sr-only">
        Toggle theme{mounted ? ` (Current: ${theme})` : ""}
      </span>
    </Button>
  )
}