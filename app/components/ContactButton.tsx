"use client"
import React from 'react'
import { motion } from "framer-motion"
interface ContactProps {
  // title: string;
  style?: string;
  url?: string;
  children: React.ReactNode;
}

export default function ContactButton({ style, url, children }: ContactProps) {
  return (
    <motion.a
      href={url ? url : '/'}
      target='_blank'
      className={`${style} w-2/3 min-[450px]:w-1/2 sm:w-1/3 py-6 flex justify-center rounded-lg items-center relative text-light font-semibold`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}
