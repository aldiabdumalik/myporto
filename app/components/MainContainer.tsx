"use client"

import React from 'react'
interface MainProps {
  style?: string;
  children: React.ReactNode
}
export default function MainContainer({style, children}: MainProps) {
  return (
    <main className={`${style} h-screen px-2 lg:px-32 text-dark dark:text-light`}>{children}</main>
  )
}
