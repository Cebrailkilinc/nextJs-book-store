import '../index.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/package/components/Navbar'
import { Providers } from './providers'
import Alert from '@/package/components/Alert'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContextProvider } from './context/AlertContext'


const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <head>
        <link href="/public/output.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Providers>
          <GlobalContextProvider>
            <Navbar />
            <Alert />
            {children}
          </GlobalContextProvider>
        </Providers>

      </body>
    </html>
  )
}
