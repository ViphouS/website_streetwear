import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Axonius',
  description: 'Street culture and sustainable fashion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 