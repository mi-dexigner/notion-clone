import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexReactClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'The Connected workspace where better faster work happens.',
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/logo.svg",
        href:"/logo.svg",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url:"/logo-dark.svg",
        href:"/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexReactClientProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="jotion-theme-2"
        >
        {children}
        </ThemeProvider>
        </ConvexReactClientProvider>
        </body>
    </html>
  )
}
