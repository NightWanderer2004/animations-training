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
            <main>{children}</main>
         </body>
      </html>
   )
}
