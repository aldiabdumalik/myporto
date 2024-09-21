'use client'
import React, { useState } from 'react'
import MainContainer from '../components/MainContainer'

export default function page() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const onSubmit = async () => {
    if (form.password !== 'P@ssw0rd234') {
      return;
    }

    if (form.email === 'g') {
      return location.href = "https://gmail.com";
    }

    if (form.email == 't') return location.href = "https://web.telegram.org/";
    if (form.email == 'i') return location.href = "https://www.instagram.com/";
  }
  return (
    <MainContainer style='lg:py-24 flex flex-col w-full items-center justify-center gap-6'>
      <div className='flex flex-col gap-4 w-full  md:w-1/3 border border-dark dark:border-light rounded-md py-8 px-2 md:px-4'>
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>Email</span>
          <div className='flex items-center justify-center border border-dark dark:border-light rounded-md h-10 px-1'>
            <input type="text" className='h-full w-full bg-transparent focus:outline-none' value={form.email} onChange={e => setForm((prev) => ({ ...prev, email: e.target.value }))} />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>Password</span>
          <div className='flex items-center justify-center border border-dark dark:border-light rounded-md h-10 px-1'>
            <input type="text" className='h-full w-full bg-transparent focus:outline-none' value={form.password} onChange={e => setForm((prev) => ({ ...prev, password: e.target.value }))} />
          </div>
        </div>
        <button
          type='button'
          onClick={onSubmit}
          className='flex bg-primary justify-center items-center rounded-md text-light py-2'
        >
          Login
        </button>
      </div>
    </MainContainer>
  )
}
