'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import PageWrapper from '@/app/components/PageWrapper'

export default function page() {
   return (
      <PageWrapper>
         <div className='grid grid-cols-2 grid-rows-2 lg:flex gap-3 lg:gap-6 -mt-[500px] max-w-fit mx-auto rounded-2xl py-5 px-6 border border-black/10 lg:scale-150'>
            <MagneticBtn className='col-span-1 lg:col-span-1'>Open</MagneticBtn>
            <MagneticBtn className='col-span-1 lg:col-span-1'>Share link ↗</MagneticBtn>
            <MagneticBtn className='col-span-2 lg:col-span-1'>← Back</MagneticBtn>
         </div>
      </PageWrapper>
   )
}

function MagneticBtn({ children, className }) {
   const ref = useRef(null)
   const springConf = { stiffness: 150, damping: 15, mass: 0.1 }
   const position = { x: useMotionValue(0), y: useMotionValue(0) }
   const positionSpring = { x: useSpring(position.x, springConf), y: useSpring(position.y, springConf) }

   const handleMouse = e => {
      const { clientX, clientY } = e
      const { height, width, left, top } = ref.current.getBoundingClientRect()
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)

      position.x.set(middleX * 0.125)
      position.y.set(middleY * 0.125)
   }
   const reset = () => {
      position.x.set(0)
      position.y.set(0)
   }

   const { x, y } = positionSpring

   return (
      <button className={`px-6 py-2 text-neutral-900 relative group active:scale-[98%] transition-transform ${className}`}>
         <motion.div
            ref={ref}
            className='absolute top-0 left-0 bg-black/5 group-active:bg-black/10 text-neutral-900 rounded-xl w-full h-full transition-colors'
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x, y }}
         />
         {children}
      </button>
   )
}
