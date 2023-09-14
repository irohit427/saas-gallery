import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { ThemeProvider } from '@/providers/themeProvider'
import Footer from '@/components/footer'
import { Separator } from '@/components/ui/separator'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Photography Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
            {children}
            <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
