'use client'
import { dm_serif_display } from './fonts'
import { Heading } from './components/Heading'
import Example from './components/Example'
import { links } from './data'

export default function Home() {
   return (
      <div className={`${dm_serif_display.className}`}>
         <Heading text='Welcome to Ani-Magic' />
         <div className='relative z-20 container max-w-6xl mx-auto px-2 lg:px-0 pt-[70vh] pb-20 lg:pt-[90vh] grid lg:grid-cols-3 gap-20 lg:gap-x-8 gap-y-16'>
            {links.map((el, i) => {
               const delay = i * 0.075
               return <Example key={i} delay={delay} title={el.link.split('-').join(' ')} link={el.link} category={el.category} />
            })}
         </div>
      </div>
   )
}
