import { motion } from 'framer-motion'
import { e_ukraine } from '../fonts'
import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Example({ containerRef, delay, title, link, category }) {
   const isMobile = useMediaQuery('(max-width: 640px)')

   return (
      <motion.a
         href={`/examples/${link}`}
         initial={{ opacity: 0, y: 20, scale: 0.98 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         whileTap={{ scale: 0.98, transition: { delay: 0 } }}
         viewport={{ once: true, root: containerRef, margin: `0px 0px ${isMobile ? -120 : -100}px 0px` }}
         transition={{ duration: 0.9, delay: 0.25 + delay, ease: 'backOut' }}
         className={`w-full h-[430px] lg:h-[320px] cursor-pointer ${e_ukraine.className}`}
      >
         <motion.div className='relative h-full'>
            <div className='absolute top-0 left-0 block w-full h-full bg-blue-50 rounded-lg' />
            <Image
               src={`/thumbnails/${link}.png`}
               layout='fill'
               alt={title}
               className='relative z-10 p-0.5 h-full w-full rounded-lg object-cover pointer-events-none'
            />
         </motion.div>
         <span className='block text-neutral-400/75 text-xs pt-1'>{category}</span>
         <span className='block first-letter:uppercase shadow-inner shadow-white/20 bg-white/50 text-neutral-700'>{title}</span>
      </motion.a>
   )
}
