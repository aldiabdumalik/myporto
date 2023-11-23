"use client"

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import TransitionEffect from './TransitionEffect';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
interface MainProps {
  style?: string;
  children: React.ReactNode
}
export default function MainContainer({style, children}: MainProps) {
  const asPath = usePathname()
  return (
    <>
      <TransitionEffect />
      <div className={`${style} h-screen px-2 lg:px-32 text-dark dark:text-light`}>{children}</div>
    </>
  )
}
