'use client';
import React from 'react'
import { motion } from 'framer-motion';
interface AnimatedTextProps {
  text: string;
  style?: string;
}
const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5
    }
  }
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};
export default function AnimatedText({ text, style }: AnimatedTextProps) {
  return (
    <div
      className='w-full mx-auto flex items-center justify-center py-2 overflow-hidden'
    >
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize ${style}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {
          text.split(" ").map((word: string, index: number) =>
            <motion.span key={index} className='inline-block' variants={singleWord}>
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}
