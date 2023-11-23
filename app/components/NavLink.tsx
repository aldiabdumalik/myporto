"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
interface LinkProps {
  style?: string;
  href: string;
  title: string;
  func: Function;
}
export default function NavLink({style, href, title, func}: LinkProps) {
  const asPath = usePathname();
  // const {asPath} = rts;
  return (
    <Link 
      href={href}
      className={`${style} relative group`}
      onClick={() => func('click')}
      scroll={false}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${asPath === href ? 'w-full':'w-0'}`}
        >&nbsp;</span>
    </Link>
  )
}
