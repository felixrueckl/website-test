import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website Test',
  description: 'A modern Next.js website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}