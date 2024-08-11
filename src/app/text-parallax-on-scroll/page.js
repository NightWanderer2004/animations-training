'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function page() {
   const container = useRef()
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start'],
   })

   return (
      <div ref={container}>
         <Slide bg='#3b82f6' left={'-40%'} direction='left' progress={scrollYProgress} />
         <Slide bg='#60a5fa' left={'-75%'} direction='right' progress={scrollYProgress} />
      </div>
   )
}

function Slide(props) {
   const direction = props.direction == 'left' ? -1 : 1
   const translateX = useTransform(props.progress, [0, 1], [220 * direction, -220 * direction])

   return (
      <motion.div style={{ x: translateX, left: props.left }} className='relative flex whitespace-nowrap'>
         <Phrase bg={props.bg} />
         <Phrase bg={props.bg} />
         <Phrase bg={props.bg} />
      </motion.div>
   )
}

function Phrase({ bg }) {
   return (
      <div className='px-5 flex gap-5 items-center'>
         <p className='text-blue-500 font-medium text-[7.5vw]'>
            Making <i className='text-blue-400 pr-5'>magic</i>
         </p>
         <div className='relative h-[7.5vw] w-[12.5vw] rounded-full overflow-hidden' style={{ backgroundColor: bg }} />
      </div>
   )
}
