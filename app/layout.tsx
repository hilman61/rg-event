import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'RG EVENT PRODUCTION - Profesional Event Organizer',
  description: 'Solusi acara yang lengkap dan profesional dengan layanan terbaik untuk event Anda',
  generator: 'rg-event-production',
  icons: {
    icon: [
      {
        url: '/rg1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/rg2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/rg3.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/rg3.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
