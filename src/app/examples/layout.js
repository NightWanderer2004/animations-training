'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { links } from '../data'

export default function ExamplesLayout({ children }) {
   const router = useRouter()
   const pathname = usePathname()
   const [selectedLink, setSelectedLink] = useState(pathname.split('/').pop())
   const currentExampleLink = links.find(el => el.link === selectedLink)

   const handleSelectChange = event => {
      const selectedValue = event.target.value
      setSelectedLink(selectedValue)
      router.push(selectedValue)
   }

   return (
      <>
         <nav className='fixed top-2 left-2 z-20 flex flex-col items-center gap-1'>
            <div className='flex gap-1 w-full'>
               <a
                  href='/'
                  className='bg-white/40 text-center w-full border border-white/20 backdrop-blur-md p-1 px-2 rounded-xl shadow-inner shadow-white/40 drop-shadow-sm'
               >
                  ← back
               </a>
               <a
                  href={`https://github.com/NightWanderer2004/animations-training/blob/main/src/app/examples/${currentExampleLink.link}/page.js`}
                  className='bg-white/40 text-center w-full  border border-white/20 backdrop-blur-md p-1 px-2 rounded-xl shadow-inner shadow-white/40 drop-shadow-sm'
               >
                  code
               </a>
            </div>
            <select
               className='bg-white/40 border border-white/20 backdrop-blur-md p-1 px-2 rounded-xl shadow-inner shadow-white/40 drop-shadow-sm max-w-[170px]'
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
         <div className='h-[85vh] pointer-events-none' />
         {children}
         <div className='h-[85vh] pointer-events-none' />
      </>
   )
}
