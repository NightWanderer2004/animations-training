import { Yeseva_One, DM_Serif_Display } from 'next/font/google'
import localFont from 'next/font/local'

export const dm_serif_display = DM_Serif_Display({
   subsets: ['latin'],
   style: ['normal', 'italic'],
   weight: '400',
})

export const yeseva_one = Yeseva_One({
   subsets: ['latin'],
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
