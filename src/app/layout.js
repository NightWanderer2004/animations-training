'use client'
import './globals.css'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import Lenis from 'lenis'
import mixpanel from 'mixpanel-browser'

export default function RootLayout({ children }) {
   useEffect(() => {
      const lenis = new Lenis({
         lerp: 0.075,
      })

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
            <script>
               {mixpanel.init(process.env.MIXPANEL_TOKEN, {
                  track_pageview: true,
                  ignore_dnt: true,
                  persistence: 'localStorage',
               })}
            </script>
         </head>
         <body>
            <main>{children}</main>
         </body>
      </html>
   )
}
