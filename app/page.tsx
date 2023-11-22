import Image from 'next/image'
import MainContainer from './components/MainContainer'
import AnimatedText from './components/animate/AnimatedText'
import { CssIcon, HtmlIcon, MySqlIcon, NextjsIcon, PhpIcon, ReactIcon, TailwindIcon } from './components/svg'

export default function Home() {
  return (
    <MainContainer style='lg:py-24 flex flex-col flex-col-reverse md:flex-row w-full items-center justify-center md:justify-start gap-4 md:gap-0'>
      <div className='flex flex-col md:flex-1'>
        <AnimatedText text='Web & Mobile Developer👋' style='text-4xl lg:text-6xl' />
        <span className='py-2 text-lg md:text-lg'>
          Hi, I'm Aldi Abdu. A passionate Web & Mobile Developer based in Karawang, West Java
        </span>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2'>
          <span className='text-sm md:pb-0 md:pr-4 md:border-r border-dark dark:border-light'>Tech Stack</span>
          <div className="flex items-center gap-6 md:gap-2">
            <div className='md:px-2'>
              <HtmlIcon height={24} width={24} className='fill-[#F29111] dark:fill-light' />
            </div>
            <div className='md:px-2'>
              <CssIcon height={24} width={24} className='fill-[#3C99DC] dark:fill-light' />
            </div>
            <div className='md:px-2'>
              <TailwindIcon height={24} width={24} className='fill-[#61DBFB] dark:fill-light' />
            </div>
            <div className='md:px-2'>
              <ReactIcon height={24} width={24} className='fill-[#61DBFB] dark:fill-light' />
            </div>
            <div className='md:px-2'>
              <NextjsIcon height={24} width={24} className='fill-[#61DBFB] dark:fill-light' />
            </div>
            <div className='md:px-2'>
              <PhpIcon height={26} width={26} className='fill-[#474A8A] dark:fill-light' />
            </div>
            <div className='md:px-2'>
              <MySqlIcon height={24} width={24} className='fill-[#00758F] dark:fill-light' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:flex-1'>
        <div className='hero-img h-[18rem] w-[18rem] lg:h-[25rem] lg:w-[25rem]'></div>
      </div>
    </MainContainer>
  )
}
