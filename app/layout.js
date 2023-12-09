import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Leanne Goldsmith',
  description: 'Junior Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <body className={`${inter.variable} font-montserrat`}>{children}</body>
      <Footer />
    </>
  )
}
