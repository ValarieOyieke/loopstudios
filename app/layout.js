import { Alata, Josefin_Sans } from 'next/font/google'
import './globals.css'

const alata = Alata({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alata'
})

const josefin_sans = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-josefin-sans'
})

export const metadata = {
  title: 'Loop Studios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alata.variable}  ${josefin_sans.variable}`}>
        {children}
      </body>
    </html>
  )
}
