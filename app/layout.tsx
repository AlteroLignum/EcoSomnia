import './globals.scss';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EcoSomnia — Hospitality Management System',
  description: 'Simplify operations. Elevate experiences. Grow your revenue.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/faviconeco.jpg" />
      </head>
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}