import { motion } from 'framer-motion'
import { pageVariants } from '../data'

export default function PageWrapper({ children }) {
   return (
      <motion.div variants={pageVariants} initial='hidden' animate='visible' transition={{ duration: 0.6, ease: 'backOut' }}>
         {children}
      </motion.div>
   )
}
