'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useTransform, useScroll, motion } from 'framer-motion'
import { e_ukraine, yeseva_one } from '../../fonts'

const projects = [
   {
      title: 'Planet with rings',
      description: 'A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity.',
      src: 'planet.jpg',
      color: '#A0969E',
   },
   {
      title: 'Jellyfish',
      description:
         'Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles, although a few are anchored to the seabed by stalks rather than being mobile.',
      src: 'jelly.webp',
      color: '#2C77EE',
   },
   {
      title: 'Water',
      description: 'Water is a transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth.',
      src: 'water.jpg',
      color: '#709FCF',
   },
]

export default function page() {
   const container = useRef(null)
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start center', 'end'],
   })

   return (
      <div ref={container}>
         {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.02
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
         })}
      </div>
   )
}

function Card({ title, description, src, color, i, progress, range, targetScale }) {
   const isLast = i === projects.length - 1
   const container = useRef(null)
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['1.2 end', isLast ? 'center' : 'start'],
   })

   const scale = useTransform(progress, range, [1, targetScale])
   const rotationX = useTransform(scrollYProgress, [0, 1], [-80, isLast ? 0 : 90])
   const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.5])
   const filter = useTransform(scrollYProgress, [0, 0.3], ['brightness(0.75)', 'brightness(1)'])

   return (
      <div
         ref={container}
         className={`h-[28vh] text-white flex justify-center items-center sticky top-0 drop-shadow-[0_4px_6px_rgba(0,0,0,0.10)] ${yeseva_one.className}`}
      >
         <motion.div
            className='border-4 border-black/5 shadow-inner shadow-white/20 flex flex-col md:h-[600px] w-screen p-8 md:p-10 relative rounded-3xl origin-bottom'
            style={{
               backgroundColor: color,
               top: '-5vh',
               scale,
               rotateX: rotationX,
               opacity: isLast ? 1 : opacity,
               filter,
            }}
         >
            <h2 className='mb-5 text-5xl'>{title}</h2>
            <div className='flex flex-col md:flex-row h-full md:mb-8 gap-10'>
               <div className='md:w-1/2 relative top-[2%] md:top-[10%]'>
                  <p className={`text-2xl leading-relaxed first-letter:text-4xl ${e_ukraine.className}`}>{description}</p>
               </div>
               <div className='relative w-full md:w-[60%] h-[200px] md:h-full rounded-2xl overflow-hidden'>
                  <motion.div className='w-full h-full'>
                     <Image className='object-cover' fill src={`/img/${src}`} alt='image' />
                  </motion.div>
               </div>
            </div>
         </motion.div>
      </div>
   )
}
