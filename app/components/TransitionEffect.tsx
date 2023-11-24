"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[90] bg-flagred'
        initial={{ x: '0%', width: '400%' }}
        animate={{ x: '100%', width: '0%' }}
        // exit={{x:['0%', '100%'], width:['0%', '100%']}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[80] bg-dark'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-[70] bg-flaggreen'
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  )
}
