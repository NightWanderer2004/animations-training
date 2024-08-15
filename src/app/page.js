'use client'
import { useRef } from 'react'
import { dm_serif_display } from './fonts'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
   const container = useRef(null)
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start center', 'end'],
   })

   return (
      <div ref={container} className={`${dm_serif_display.className}`}>
         <Heading progress={scrollYProgress} text='Welcome to Ani-Magic' />
      </div>
   )
}

function Heading({ text, progress }) {
   const words = text.split(' ')

   const heightSkewSm = useTransform(progress, [0, 1], ['40vh', '80vh'])
   const heightSkewMd = useTransform(progress, [0, 1], ['40vh', '80vh'])
   const rotateY = useTransform(progress, [0, 1], [0, 60])

   return (
      <motion.div className='h-[200vh]'>
         <motion.div
            style={{ height: heightSkewMd, rotateY }}
            initial={{ top: -200, opacity: 0.5, scale: 1.25 }}
            animate={{ top: -160, opacity: 0.9, scale: 1.5 }}
            transition={{ ease: 'easeOut', duration: 1.75 }}
            className='absolute -top-[160px] left-0 w-full h-full bg-[#56a5f7]/10 rounded-full blur-md'
         />
         {/* inner */}
         <motion.div
            style={{ height: heightSkewSm }}
            initial={{ top: -200, opacity: 0.5, scale: 1.1 }}
            animate={{ top: -180, opacity: 1, scale: 1.25 }}
            transition={{ ease: 'easeOut', duration: 1.75 }}
            className='absolute -top-[180px] left-0 w-full h-full bg-[#b8d5ff]/15 rounded-full blur-lg'
         />
         <motion.h1 className='text-center text-[#97c6fe] text-6xl lg:text-9xl max-w-sm mx-auto'>
            {words.map((word, i) => {
               const wordPos = i / words.length
               return (
                  <Word key={i} wordPos={wordPos}>
                     {word}
                  </Word>
               )
            })}
         </motion.h1>
      </motion.div>
   )
}

function Word({ children, wordPos }) {
   const isTitle = children == 'Ani-Magic'

   return (
      <motion.span
         className={`inline-block mr-3 mb-0.5 ${isTitle ? 'italic' : ''}`}
         initial={{ y: isTitle ? 30 : 25, filter: 'blur(15px)', opacity: 0 }}
         animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
         transition={{ duration: isTitle ? 0.9 : 0.8, ease: 'backOut', delay: wordPos * 0.45 }}
      >
         {children}
      </motion.span>
   )
}
