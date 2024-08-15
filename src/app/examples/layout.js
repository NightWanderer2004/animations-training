'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const links = ['/text-parallax-on-scroll', '/text-run-on-scroll', '/cards-parallax', '/magnetic-btns', '/parallax-gallery']

export default function ExamplesLayout({ children }) {
   const router = useRouter()
   const pathname = usePathname()
   const [selectedLink, setSelectedLink] = useState(pathname)

   const handleSelectChange = event => {
      const selectedValue = event.target.value
      setSelectedLink(selectedValue)
      router.push(selectedValue)
      window.scrollTo({ top: 0 })
   }

   return (
      <>
         <nav className='fixed top-2 left-2 z-20'>
            <select
               className='bg-white/40 border border-white/20 backdrop-blur-md p-1 rounded-xl shadow-inner shadow-white/40 drop-shadow-sm'
               onChange={handleSelectChange}
               value={selectedLink}
            >
               {links.map((link, index) => (
                  <option key={index} value={link}>
                     {link}
                  </option>
               ))}
            </select>
         </nav>
         <div className='h-[85dvh]' />
         {children}
         <div className='h-[85dvh]' />
      </>
   )
}
