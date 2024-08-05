import './globals.css'
import localFont from 'next/font/local'

const e_ukraine = localFont({
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

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={e_ukraine.className}>{children}</body>
      </html>
   )
}
