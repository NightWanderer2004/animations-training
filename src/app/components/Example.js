import { motion } from 'framer-motion'
import { e_ukraine } from '../fonts'

export default function Example({ title, link, thumbnail }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 60, scale: 0.97 }}
         animate={{ opacity: 1, y: 0, scale: 1 }}
         transition={{ duration: 1, delay: 0.5, ease: 'backOut' }}
         className={`w-full h-[300px] ${e_ukraine.className}`}
      >
         <h3>Testing naming</h3>
         <div className='h-full w-full bg-blue-50 rounded-lg'></div>
      </motion.div>
   )
}
