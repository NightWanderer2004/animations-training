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
         <head>
            <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
         </head>
         <body>
            <main>{children}</main>
         </body>
      </html>
   )
}
