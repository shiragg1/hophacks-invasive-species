import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stony Run Restoration',
  description: 'HopHacks Project!',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import Image from 'next/image'

export default function Page() {
  return (
      <Image
        src="/profile.png"
        width={{500}
        height={500}
        alt="Picture of the Stony trail"
      }
}
