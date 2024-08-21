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
         whileTap={{ scale: 0.98 }}
         viewport={{ once: isMobile ? true : false, root: containerRef, margin: `0px 0px ${isMobile ? -160 : -200}px 0px` }}
         transition={{ duration: 0.9, delay: 0.3 + delay, ease: 'backOut' }}
         className={`w-full h-[430px] lg:h-[320px] cursor-pointer ${e_ukraine.className}`}
      >
         <motion.div className='relative h-full'>
            <div className='absolute top-0 left-0 block w-full h-full bg-blue-50 rounded-lg' />
            <Image
               src={`/thumbnails/${link}.png`}
               width={300}
               height={200}
               alt={title}
               className='relative z-10 p-1 h-full w-full rounded-xl object-cover pointer-events-none'
            />
         </motion.div>
         <span className='block text-neutral-400/75 text-xs pt-1'>{category}</span>
         <span className='block first-letter:uppercase shadow-inner shadow-white/20 bg-white/50 text-neutral-700'>{title}</span>
      </motion.a>
   )
}
