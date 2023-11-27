'use client'
import Image from 'next/image';
import React from 'react'
interface projectProps {
  image: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}
export default function ProjectBox({ image, title, desc, children }: projectProps) {
  return (
    <div className="grid grid-cols-5 gap-6 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 md:p-8 dark:border-light dark:bg-dark ">
      <div className="col-span-5 md:col-span-3">
        <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[3rem] rounded-br-3xl bg-dark dark:bg-light' />
        <Image src={image} width={0} height={0} alt='projects-img' className='w-full h-auto rounded-2xl drop-shadow-lg shadow-dark dark:shadow-light' unoptimized />
      </div>
      <div className="col-span-5 md:col-span-2 flex flex-col gap-4">
        <h2 className='font-bold text-xl md:text-4xl'>{title}</h2>
        <p className='font-medium'>{desc}</p>
        <div className='flex gap-2 items-center'>{children}</div>
      </div>
    </div>
  )
}
