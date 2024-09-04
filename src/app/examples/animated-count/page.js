'use client'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import s from './style.module.scss'
import PageWrapper from '@/app/components/PageWrapper'

const height = 65

export default function page() {
   const [count, setCount] = useState(47)

   return (
      <PageWrapper>
         <div className={s.body}>
            <p className='text-xl font-normal text-neutral-300 absolute top-[58vh]'>click me</p>
            <AnimatedCounter clickHandler={() => setCount(Math.random() * 100)} value={count} />
         </div>
      </PageWrapper>
   )
}

function AnimatedCounter({ value, clickHandler }) {
   return (
      <motion.div
         whileTap={{ y: 2, scale: 0.99, boxShadow: '0 7px 0 -1px #e5e5e5, 0 9px 5px 0 #d4d4d4' }}
         initial={{ rotateX: '30deg', boxShadow: '0 8px 0 -1px #e5e5e5, 0 10px 5px 0 #d4d4d4' }}
         className={s.counter}
         onClick={clickHandler}
      >
         {/* <AnimatedDigit place={100} value={value} /> */}
         <AnimatedDigit place={10} value={value} />
         <AnimatedDigit place={1} value={value} />
      </motion.div>
   )
}

function AnimatedDigit({ place, value }) {
   let valueRoundedToPlace = Math.floor(value / place)
   let animatedValue = useSpring(valueRoundedToPlace, { stiffness: 320, damping: 55 })

   useEffect(() => {
      animatedValue.set(valueRoundedToPlace)
   }, [animatedValue, valueRoundedToPlace])

   return (
      <div style={{ height }} className={s.digit}>
         {[...Array(10).keys()].map(i => (
            <AnimatedNumber key={i} mv={animatedValue} number={i} />
         ))}
      </div>
   )
}

function AnimatedNumber({ mv, number }) {
   let y = useTransform(mv, latest => {
      let placeValue = latest % 10
      let offset = (number - placeValue) % 10

      let memo = offset * height

      if (offset > 1) memo -= 10 * height

      return memo
   })

   return (
      <motion.span style={{ y }} className={s.number}>
         {number}
      </motion.span>
   )
}
