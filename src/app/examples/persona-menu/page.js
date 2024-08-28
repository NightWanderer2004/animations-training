'use client'
import { useRef } from 'react'
import s from './style.module.scss'
import { dm_serif_display } from '@/app/fonts'
import PageWrapper from '@/app/components/PageWrapper'

export default function page() {
   const plane = useRef(null)

   return (
      <PageWrapper>
         <div className={`${s.container} ${dm_serif_display.className}`}>
            <div className={s.backdrop}></div>
            <div ref={plane} className={s.body}>
               <Text3d rotation={8} primary={'Persona'} secondary={'Persona'} />
               <Text3d rotation={0} primary={'Stats'} secondary={'Stats'} />
               <Text3d rotation={-8} primary={'System'} secondary={'System'} />
            </div>
         </div>
      </PageWrapper>
   )
}

function Text3d({ rotation, primary, secondary }) {
   return (
      <div style={{ rotate: `${rotation}deg` }} className={s.textContainer}>
         <p className={s.primary}>{primary}</p>
         <p className={s.secondary}>{secondary}</p>
      </div>
   )
}
