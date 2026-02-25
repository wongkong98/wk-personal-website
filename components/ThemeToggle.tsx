'use client'

import { Moon, SunDim } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') setDark(true)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full absolute top-4 right-4" onClick={() => setDark(!dark)}>
          {dark ? <SunDim className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>

      <TooltipContent className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black">
        <p>Change to {dark ? 'light' : 'dark'} theme</p>
      </TooltipContent>
    </Tooltip>
  )
}