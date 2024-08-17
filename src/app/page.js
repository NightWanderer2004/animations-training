'use client'
import { dm_serif_display } from './fonts'
import { Heading } from './components/Heading'
import Example from './components/Example'

export default function Home() {
   return (
      <div className={`${dm_serif_display.className} h-[330vh]`}>
         <Heading text='Welcome to Ani-Magic' />
         <div className='relative z-20 container mx-auto px-4 lg:px-0 pt-[70dvh] lg:pt-[90dvh] grid gap-20'>
            <Example />
            <Example />
         </div>
      </div>
   )
}
