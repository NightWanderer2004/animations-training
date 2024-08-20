'use client'
import PageWrapper from '@/app/components/PageWrapper'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function page() {
   return (
      <PageWrapper>
         <Paragraph paragraph='Welcome to the journey of becoming an web animation master' />
      </PageWrapper>
   )
}

function Paragraph({ paragraph }) {
   const container = useRef(null)
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start 0.8', 'end 0.7'],
   })

   const words = paragraph.split(' ')
   return (
      <p ref={container} className='flex flex-wrap px-5 text-5xl lg:text-[120px] font-medium text-stone-900'>
         {words.map((word, i) => {
            const elemPos = i === words.length - 1 ? 1 : 1.5
            const start = i / words.length
            const end = start + elemPos / words.length
            return (
               <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
               </Word>
            )
         })}
      </p>
   )
}

function Word({ children, progress, range }) {
   const opacity = useTransform(progress, range, [0, 1])
   const italicWords = ['becoming', 'master']

   return (
      <span className='relative mr-[2.045vw] leading-[1.2]'>
         <span
            className='absolute opacity-10'
            style={{
               fontStyle: italicWords.includes(children) ? 'italic' : 'normal',
            }}
         >
            {children}
         </span>
         <motion.span
            style={{
               color: italicWords.includes(children) ? '#3b82f6' : '',
               opacity,
               fontStyle: italicWords.includes(children) ? 'italic' : 'normal',
            }}
         >
            {children}
         </motion.span>
      </span>
   )
}
