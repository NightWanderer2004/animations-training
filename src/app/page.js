'use client'
import { dm_serif_display } from './fonts'
import { Heading } from './components/Heading'
import Example from './components/Example'
import { links } from './data'
import { useEffect, useRef } from 'react'
import mixpanel from 'mixpanel-browser'

export default function Home() {
   useEffect(() => {
      mixpanel.track('Page View', {
         'Page Type': 'Home Page',
      })
   }, [])
   const container = useRef(null)

   return (
      <div className={`relative m-1 lg:m-4 ${dm_serif_display.className}`}>
         <Heading text='Welcome to Ani-Magic' />
         <div
            ref={container}
            className='relative z-20 container max-w-6xl mx-auto px-2 lg:px-0 pt-[70vh] pb-40 lg:pt-[90vh] grid lg:grid-cols-3 gap-20 lg:gap-x-6 gap-y-24'
         >
            {links.map((el, i) => {
               const delay = i * 0.05
               return (
                  <Example
                     key={i}
                     containerRef={container}
                     delay={delay}
                     title={el.link.split('-').join(' ')}
                     link={el.link}
                     category={el.category}
                  />
               )
            })}
         </div>
      </div>
   )
}
