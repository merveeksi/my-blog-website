import { cx } from "@/src/utils";
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/src/components/Header'
import type { Metadata } from 'next'
import { ShootingStarsDemo } from '../components/ui/background-demo'
import { ThemeProvider } from '@/src/components/ThemeProvider'
import { ThemeTest } from '@/src/components/ui/theme-test'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in'
})

const manrope = Manrope({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-mr' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        cx(
          inter.variable,
          manrope.variable,
          'font-mr bg-light dark:bg-dark relative overflow-y-auto'
        )}>
        <ThemeProvider>
          <div className="fixed inset-0 w-full h-full z-0">
            <ShootingStarsDemo />
          </div>
          
          {/* Content layer with higher z-index */}
          <div className="relative z-10">
            <Header />
            {children}
          </div>
          <ThemeTest />
        </ThemeProvider>
      </body>
    </html>
  )
}