import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'

export const dynamic = 'force-dynamic'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Modern Apartment near Fleming Metro | Thessaloniki',
  description: 'Beautifully updated 1-bedroom apartment near the sea and Fleming Metro Station in Thessaloniki, Greece. Contemporary style with a striking loft bedroom.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Modern Apartment near Fleming Metro | Thessaloniki',
    description: 'Beautifully updated 1-bedroom apartment near the sea and Fleming Metro Station in Thessaloniki.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans bg-[hsl(40,33%,98%)] text-[hsl(220,15%,15%)]`}>
        {children}
        <ChunkLoadErrorHandler />
      </body>
    </html>
  )
}
