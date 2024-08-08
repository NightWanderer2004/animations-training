'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function page() {
   useEffect(() => {
      const lenis = new Lenis()

      function raf(time) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   }, [])

   return <Paragraph paragraph='Приветсвую на пути становления сенсеем анимаций в вебе' />
}

function Paragraph({ paragraph }) {
   const container = useRef(null)
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start 0.8', 'end 0.7'],
   })

   const words = paragraph.split(' ')
   return (
      <p ref={container} className='flex text-[6.5vw] text-stone-900 p-10 flex-wrap'>
         {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
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
   const italicWords = ['сенсеем', 'вебе', 'становления']
   return (
      <span className='relative mr-[2.045vw] leading-snug'>
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
               opacity: opacity,
               fontStyle: italicWords.includes(children) ? 'italic' : 'normal',
            }}
         >
            {children}
         </motion.span>
      </span>
   )
}
