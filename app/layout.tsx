import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ansel Haymitch\'s Baptism | February 15, 2026',
  description: 'You\'re invited to celebrate the christening of Baby Ansel Haymitch. Join us for this blessed occasion!',
  keywords: 'baptism, christening, invitation, baby, celebration',
  openGraph: {
    title: 'Ansel Haymitch\'s Baptism',
    description: 'Join us for this blessed celebration!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Great+Vibes&family=Lato:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
