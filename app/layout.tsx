import type { Metadata } from 'next'
import './globals.css'
import './route-styles.css'

export const metadata: Metadata = {
  title: 'Clearlake Automotives · Find better. Drive clearer.',
  description: 'A clearer way to find your next car in Mombasa and beyond.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
