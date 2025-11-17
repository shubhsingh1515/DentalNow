import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from "next/script";
import './globals.css'
import FloatingWhatsApp from '@/components/floatWhatsapp';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DentalNow - Your Perfect Smile',
  description: 'World class technology neighborhood dentist.',
  generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-[#000000] antialiased`}>
        <FloatingWhatsApp />

        {/* Load GSAP on client only */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  )
}
