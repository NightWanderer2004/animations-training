'use client'
import './globals.css'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function RootLayout({ children }) {
   useEffect(() => {
      const lenis = new Lenis()

      function raf(time) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   }, [])

   return (
      <html lang='en'>
         <body>
            <main className='relative container pt-20 lg:pt-44 px-6 mx-auto overflow-x-hidden min-h-dvh'>{children}</main>
         </body>
      </html>
   )
}
