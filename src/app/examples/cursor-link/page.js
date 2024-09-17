'use client'
import Cursor from '@/app/components/Cursor'
import PageWrapper from '@/app/components/PageWrapper'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Img from '../../../../public/img/outdoor.jpeg'
import Image from 'next/image'

export default function page() {
   const [isHovering, setIsHovering] = useState(false)
   const targetRef = useRef(null)

   const handlePositionChange = (x, y) => {
      if (targetRef.current) {
         const rect = targetRef.current.getBoundingClientRect()
         const isInside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
         setIsHovering(isInside)
      }
   }

   return (
      <PageWrapper>
         <div className='flex items-center justify-center z-50 my-[-85vh] h-screen w-full'>
            <Cursor
               isHovering={isHovering}
               attachToParent
               variants={{
                  initial: { scale: 0.5, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.5, opacity: 0 },
               }}
               springConfig={{
                  bounce: 0.001,
               }}
               transition={{
                  ease: 'backInOut',
                  duration: 0.1,
               }}
               onPositionChange={handlePositionChange}
            >
               Discover 🌿
            </Cursor>
            <div ref={targetRef}>
               <Image
                  className='rounded-xl drop-shadow-md'
                  src={Img}
                  alt='Modern Building with Overhanging Tree'
                  quality={100}
                  placeholder='blur'
                  width={350}
                  height={500}
               />
            </div>
         </div>
      </PageWrapper>
   )
}
