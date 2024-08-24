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
            <div ref={plane} className={s.body}>
               <Text3d primary={'Beautiful'} secondary={'Beautiful'} />
               <Text3d primary={'space'} secondary={'space'} />
               <Text3d primary={'to create'} secondary={'to create'} />
            </div>
         </div>
      </PageWrapper>
   )
}

function Text3d({ primary, secondary }) {
   return (
      <div className={s.textContainer}>
         <p className={s.primary}>{primary}</p>
         <p className={s.secondary}>{secondary}</p>
      </div>
   )
}
