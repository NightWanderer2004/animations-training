'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import s from './style.module.scss'
import B1 from '../../../public/img/b1.webp'
import B2 from '../../../public/img/b2.webp'
import B3 from '../../../public/img/b3.webp'

export default function page() {
   const container = useRef(null)
   const isMobile = useMediaQuery('(max-width : 640px)')
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start center', 'end end'],
   })

   const moveSmY = useTransform(scrollYProgress, [0, 1], [0, -50])
   const moveMdY = useTransform(scrollYProgress, [0, 1], [0, -190])
   const moveLgY = useTransform(scrollYProgress, [0, 1], [0, -320])

   const moveRightX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 25 : 75])
   const moveLeftX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -25 : -75])

   const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -4 : -8])
   const rotateRight = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 6 : 12])

   return (
      <motion.div
         initial={{ y: 15, opacity: 0.4 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: 'backOut' }}
         ref={container}
         className={s.container}
      >
         <motion.div
            className={s.wrapper}
            style={{ top: '10px', left: isMobile ? 0 : '30%', y: moveSmY, x: isMobile ? moveRightX : moveLeftX, width: isMobile ? 'auto' : 580 }}
         >
            <Image src={B1} placeholder='blur' width={560} height={800} />
            <span>Modern Architectural Facade</span>
         </motion.div>
         <motion.div
            className={s.wrapper}
            style={{
               top: isMobile ? '710px' : '610px',
               right: isMobile ? '30px' : '5px',
               y: moveLgY,
               x: moveRightX,
               rotate: rotateRight,
               width: isMobile ? 330 : 550,
            }}
         >
            <Image src={B2} placeholder='blur' width={550} height={800} />
            <span>Translucent Building</span>
         </motion.div>
         <motion.div
            className={s.wrapper}
            style={{
               top: isMobile ? '-145px' : '120px',
               left: isMobile ? '15px' : '120px',
               y: moveMdY,
               x: moveLeftX,
               rotate: rotateLeft,
               width: isMobile ? 260 : 400,
            }}
         >
            <Image src={B3} placeholder='blur' width={400} height={800} />
            <span>Mesh Screens</span>
         </motion.div>
      </motion.div>
   )
}
