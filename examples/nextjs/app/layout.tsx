'use client';

import './globals.css';
import { FHEProvider } from '../components/fhe/FHEProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FHEProvider>
          {children}
        </FHEProvider>
      </body>
    </html>
  )
}
