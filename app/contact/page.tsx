import React from 'react'
import MainContainer from '../components/MainContainer'
import AnimatedText from '../components/animate/AnimatedText'
import ContactButton from '../components/ContactButton'
import { GithubIcon, InstagramIcon, LinkidinIcon } from '../components/svg'
import TransitionEffect from '../components/TransitionEffect'

export default function Contact() {
  return (
    <>
      {/* <TransitionEffect /> */}
      <MainContainer style='lg:py-24 flex flex-col w-full items-center justify-center gap-4'>
        <div className="flex justify-center">
          <AnimatedText text={`Don't be shy, Hit me up!👇`} style='text-4xl lg:text-6xl' />
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-4'>
          <ContactButton url='https://www.linkedin.com/in/aldi-abdu-malik-4a3018195/' style='!bg-[#0A66C2]'> 
            <div className='absolute left-[30%] flex h-full min-w-min items-center gap-4 overflow-hidden'>
              <LinkidinIcon width={24} height={24} className='fill-light' />
              Linkedin
            </div>
          </ContactButton>
          <ContactButton url='https://github.com/aldiabdumalik' style='!bg-[#000] dark:!bg-light dark:!text-dark'>
            <div className='absolute left-[30%] flex h-full min-w-min items-center gap-4 overflow-hidden'>
              <GithubIcon width={24} height={24} className='fill-light dark:fill-dark' />
              Github
            </div>
          </ContactButton>
          <ContactButton url='https://www.instagram.com/ryug4kai/' style='!bg-[#E1306C]'>
            <div className='absolute left-[30%] flex h-full min-w-min items-center gap-4 overflow-hidden'>
              <InstagramIcon width={24} height={24} className='fill-light' />
              Instagram
            </div>
          </ContactButton>
        </div>
      </MainContainer>
    </>
  )
}
