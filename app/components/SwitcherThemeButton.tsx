"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { MoonIcon, SunIcon } from './svg'

export default function SwitcherThemeButton() {
  const { theme, setTheme } = useTheme()
  const handleTheme = () => {
    setTheme(theme == 'dark' ? 'light':'dark')
  }
  return (
    <button 
      className='flex items-center justify-center rounded-full p-1'
      onClick={handleTheme}
    >
      {theme == 'dark' ? <MoonIcon className={'fill-dark'} /> : <SunIcon className={'fill-dark'} />}
    </button>
  )
}
