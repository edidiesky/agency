import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/anim/smooth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One:Nul -  The Creative Agency in the sports',
  description: 'Series of thought I share on web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
     
      <body className={inter.className}>
        {/* <SmoothScroll>
          {children}
        </SmoothScroll> */}
        {children}

      </body>

    </html>
  )
}
