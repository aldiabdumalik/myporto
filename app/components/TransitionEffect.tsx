"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[90] bg-flagred'
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        exit={{x:['0%', '100%'], width:['0%', '100%']}}
        transition={{duration:0.8, ease:"easeInOut"}}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[85] bg-dark'
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        transition={{delay: 0.2, duration:0.8, ease:"easeInOut"}}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-light'
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        transition={{delay: 0.4, duration:0.8, ease:"easeInOut"}}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-flaggreen'
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        transition={{delay: 0.6, duration:0.8, ease:"easeInOut"}}
      />
      {/* <div className='fixed right-full w-screen h-screen flex flex-col z-[90]'>
        <motion.div
          className=' right-full w-screen h-1/3 z-[90] bg-black'
          initial={{x: '100%', width: '100%'}}
          animate={{x: '0%', width: '0%'}}
          transition={{duration:0.8, ease:"easeInOut"}}
        />
        <motion.div
          className='right-full w-screen h-1/3 z-[90] bg-white'
          initial={{x: '100%', width: '100%'}}
          animate={{x: '0%', width: '0%'}}
          transition={{delay: 0.2, duration:0.8, ease:"easeInOut"}}
        />
        <motion.div
          className=' right-full w-screen h-1/3 z-[90] bg-flaggreen'
          initial={{x: '100%', width: '100%'}}
          animate={{x: '0%', width: '0%'}}
          transition={{delay: 0.4, duration:0.8, ease:"easeInOut"}}
        />
      </div> */}
    </>
  )
}
