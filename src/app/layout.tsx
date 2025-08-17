import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import React from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Topnavbar/TopNavbar';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: process?.env?.NEXT_PUBLIC_APP_NAME || 'Botifarma',
  description:
    'Descubre en  la mejor experiencia de compra online con miles de productos al mejor precio.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} flex min-h-screen flex-col antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
