"use client"

import React, {useState} from 'react'
import Logo from './Logo'
import NavLink from './NavLink'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from './svg'
import { useTheme } from 'next-themes'
import SwitcherThemeButton from './SwitcherThemeButton'

export default function Navbar() {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setOpen] = useState(false);
  const handleFunc = (ev: any) => {
    setOpen(!isOpen);
  }
  
  return (
    <header
      className='absolute top-0 flex items-center justify-between w-full px-2 md:px-32 py-4 font-medium text-dark dark:text-light'
      >
        <div>
          <Logo />
        </div>
        <button 
          className='md:hidden flex flex-col justify-center items-center'
          onClick={() => setOpen(!isOpen)}
        >
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
        </button>
        <ul className={`md:!flex
          md:items-center md:justify-end md:gap-2 md:w-full text-light dark:text-dark md:text-dark md:dark:text-light md:relative md:top-0 md:left-0 md:translate-x-0 md:translate-y-0 md:bg-light md:dark:bg-dark md:backdrop-blur-none md:rounded-none md:z-0
          min-w-[80vw] flex-col md:flex-row justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/90 backdrop-blur-md rounded-lg z-30 py-24 md:py-0
          ${isOpen ? 'flex':'hidden'}
        `}>
          <li className='p-2'>
            <NavLink func={handleFunc} href={'/'} title='Home'/>
          </li>
          <li className='p-2'>
            <NavLink func={handleFunc} href={'/about'} title='About'/>
          </li>
          <li className='p-2'>
            <NavLink func={handleFunc} href={'/project'} title='Project'/>
          </li>
          <li className='p-2'>
            <NavLink func={handleFunc} href={'/contact'} title='Contact'/>
          </li>
          <li className='p-0'>
            <SwitcherThemeButton />
          </li>
        </ul>
    </header>
  )
}