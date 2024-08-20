'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { links } from '../data'

export default function ExamplesLayout({ children }) {
   const router = useRouter()
   const pathname = usePathname()
   const [selectedLink, setSelectedLink] = useState(pathname.split('/').pop())

   const handleSelectChange = event => {
      const selectedValue = event.target.value
      setSelectedLink(selectedValue)
      router.push(selectedValue)
      window.scrollTo({ top: 0 })
   }

   return (
      <>
         <nav className='fixed top-2 left-2 z-20 flex gap-2'>
            <a
               href='/'
               className='bg-white/40 border border-white/20 backdrop-blur-md p-1 px-2 rounded-xl shadow-inner shadow-white/40 drop-shadow-sm'
            >
               ← back
            </a>
            <select
               className='bg-white/40 border border-white/20 backdrop-blur-md p-1 px-2 rounded-xl shadow-inner shadow-white/40 drop-shadow-sm'
               onChange={handleSelectChange}
               value={selectedLink}
            >
               {links.map((el, index) => (
                  <option key={index} value={el.link}>
                     {el.link}
                  </option>
               ))}
            </select>
         </nav>
         <div className='h-[85vh]' />
         {children}
         <div className='h-[85vh]' />
      </>
   )
}
