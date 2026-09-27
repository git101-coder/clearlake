import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clearlake Automotives | Find the right car in Mombasa',
  description: 'A trusted car-finding and brokerage service helping you discover, inspect and arrange delivery for your next vehicle.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
