import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const interTight = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RMI Enterprise - Imported Connector Supplier',
  description: 'RADHA MADHAV INDIA ENTERPRISE is a trusted importer and supplier of original automotive and industrial connectors including TE, Molex, JST and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
