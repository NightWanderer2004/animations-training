'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor({ children, isHovering, springConfig, attachToParent, variants, transition, onPositionChange }) {
   const cursorX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
   const cursorY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
   const cursorRef = useRef(null)
   const [isVisible, setIsVisible] = useState(!attachToParent)

   useEffect(() => {
      if (!attachToParent) document.body.style.cursor = 'none'
      else document.body.style.cursor = 'auto'

      const updatePosition = e => {
         cursorX.set(e.clientX)
         cursorY.set(e.clientY)
         onPositionChange?.(e.clientX, e.clientY)
      }

      document.addEventListener('mousemove', updatePosition)

      return () => document.removeEventListener('mousemove', updatePosition)
   }, [cursorX, cursorY, onPositionChange])

   const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 })
   const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 })

   useEffect(() => {
      const handleVisibilityChange = visible => setIsVisible(visible)

      if (attachToParent && cursorRef.current) {
         const parent = cursorRef.current.parentElement
         if (parent) {
            parent.addEventListener('mouseenter', () => {
               parent.style.cursor = 'none'
               handleVisibilityChange(true)
            })
            parent.addEventListener('mouseleave', () => {
               parent.style.cursor = 'auto'
               handleVisibilityChange(false)
            })
         }
      }

      return () => {
         if (attachToParent && cursorRef.current) {
            const parent = cursorRef.current.parentElement
            if (parent) {
               parent.removeEventListener('mouseenter', () => {
                  parent.style.cursor = 'none'
                  handleVisibilityChange(true)
               })
               parent.removeEventListener('mouseleave', () => {
                  parent.style.cursor = 'auto'
                  handleVisibilityChange(false)
               })
            }
         }
      }
   }, [attachToParent])

   return (
      <motion.div
         ref={cursorRef}
         className='pointer-events-none fixed left-0 top-0 z-50'
         style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
         }}
      >
         <AnimatePresence>
            {isVisible && (
               <motion.div initial='initial' animate='animate' exit='exit' variants={variants} transition={transition}>
                  <motion.div
                     animate={{
                        width: isHovering ? 155 : 18,
                        height: isHovering ? 40 : 18,
                     }}
                     className='flex items-center justify-center rounded-[24px] bg-zinc-400/20 border border-zinc-50/10 backdrop-blur-md'
                  >
                     <AnimatePresence>
                        {isHovering ? (
                           <motion.div
                              initial={{ opacity: 0, scale: 0.6 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.6 }}
                              className='inline-flex w-full items-center justify-center'
                           >
                              <div className='text-center text-base text-zinc-50'>{children}</div>
                           </motion.div>
                        ) : null}
                     </AnimatePresence>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   )
}
