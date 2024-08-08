import { Yeseva_One } from 'next/font/google'
import localFont from 'next/font/local'

export const yeseva_one = Yeseva_One({
   subsets: ['cyrillic'],
   weight: '400',
})

export const e_ukraine = localFont({
   src: [
      {
         path: '../../public/font/e-Ukraine-Regular.otf',
         weight: '400',
      },
      {
         path: '../../public/font/e-Ukraine-Medium.otf',
         weight: '500',
      },
   ],
})
