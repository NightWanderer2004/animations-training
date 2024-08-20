import { motion } from 'framer-motion'
import { e_ukraine } from '../fonts'
import Image from 'next/image'

export default function Example({ delay, title, link, category }) {
   return (
      <motion.a
         href={`/examples/${link}`}
         initial={{ opacity: 0, y: 40, scale: 0.98 }}
         animate={{ opacity: 1, y: 0, scale: 1 }}
         transition={{ duration: 0.9, delay: 0.4 + delay, ease: 'backOut' }}
         className={`w-full h-[430px] lg:h-[340px] cursor-pointer ${e_ukraine.className}`}
      >
         <motion.div className='relative h-full'>
            <div className='absolute top-0 left-0 block w-full h-full bg-blue-50 rounded-lg' />
            <Image
               src={`/thumbnails/${link}.png`}
               width={300}
               height={200}
               alt={title}
               className='relative z-10 p-1.5 h-full w-full rounded-xl object-cover'
            />
         </motion.div>
         <span className='block text-neutral-400/75 text-xs pt-1'>{category}</span>
         <span className='block first-letter:uppercase shadow-inner shadow-white/20 bg-white/50 text-neutral-700'>{title}</span>
      </motion.a>
   )
}
