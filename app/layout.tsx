import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './auth/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Encouragement: An AI Day Planner',
  description: 'Set daily goals and track accomplishments each day and have an AI chatbot give feedback and encouragement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
      
    </html>
  )
}
