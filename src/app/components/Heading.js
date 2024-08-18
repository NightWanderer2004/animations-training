import { motion, useScroll, useTransform } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useRef } from 'react'

export function Heading({ text }) {
   const container = useRef(null)
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start center', 'end'],
   })
   const isMobile = useMediaQuery('(max-width: 640px)')
   const words = text.split(' ')

   const y = useTransform(scrollYProgress, [0, 1], [0, 70])
   const heightSkewSm = useTransform(scrollYProgress, [0, 1], ['40vh', isMobile ? '70vh' : '80vh'])
   const heightSkewMd = useTransform(scrollYProgress, [0, 1], ['40vh', isMobile ? '70vh' : '85vh'])
   const rotateY = useTransform(scrollYProgress, [0, 1], [0, 50])

   return (
      <motion.div ref={container} className='absolute top-0 left-0 z-10 h-[200dvh] w-full pt-20 lg:pt-36 px-6 mx-auto overflow-x-hidden'>
         <motion.div
            style={{ y, height: heightSkewMd, rotateY }}
            initial={{ top: -200, opacity: 0.15, scale: 1.25 }}
            animate={{ top: isMobile ? -160 : -25, opacity: 0.9, scale: 1.5 }}
            transition={{ ease: 'backOut', duration: 1.75 }}
            className='absolute z-10 left-0 w-full h-full bg-[hsl(214,100%,93%)] rounded-[100%] blur-md'
         />
         {/* inner */}
         <motion.div
            style={{ height: heightSkewSm }}
            initial={{ top: -200, opacity: 0.15, scale: 1.1 }}
            animate={{ top: isMobile ? -170 : -25, opacity: 1, scale: 1.25 }}
            transition={{ ease: 'backOut', duration: 1.75 }}
            className='absolute z-20 left-0 w-full h-full bg-[hsl(211,92%,97%)] rounded-[100%] blur-xl'
         />
         <motion.h1 className='text-center text-[#97c6fe] text-6xl lg:text-9xl max-w-sm lg:max-w-2xl mx-auto relative z-30'>
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
         className={`inline-block relative z-30 mr-3 mb-0.5 ${isTitle ? 'italic' : ''}`}
         initial={{ y: isTitle ? 30 : 25, filter: 'blur(15px)', opacity: 0 }}
         animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
         transition={{ duration: isTitle ? 0.9 : 0.8, ease: 'backOut', delay: wordPos * 0.45 }}
      >
         {children}
      </motion.span>
   )
}
