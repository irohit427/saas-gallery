import React from 'react'
import { Button } from './ui/button'
import { Permanent_Marker } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './themeToggler'
import { getGallery } from '@/actions/getGallery'

const marker = Permanent_Marker({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const Navbar = async() => {
  const gallery = await getGallery();

  return (
    <div className='flex justify-around text-center py-4 shadow-md light:shadow-zinc-200 items-center mx-auto '>
      <div className='px-16'></div>
      <div className={cn(marker.className, 'xs:text-xl sm:text-3xl font-extrabold text-center')}>{gallery.name}</div>
      <div className='flex flex-row items-center gap-3 shrink'>
        <ThemeToggle />
        <Button className='rounded-full xs:py-1 xs:px-2 sm:py-2 sm:px-4'>Get in Touch</Button>
      </div>
    </div>
  )
}

export default Navbar