'use client'
import './globals.css'
import { e_ukraine } from './fonts'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const links = ['/text-parallax-on-scroll', '/text-run-on-scroll', '/cards-parallax']

export default function RootLayout({ children }) {
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
      <html lang='en'>
         <body className={e_ukraine.className}>
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
            <main>
               <div className='h-[85dvh]' />
               {children}
               <div className='h-[85dvh]' />
            </main>
         </body>
      </html>
   )
}
