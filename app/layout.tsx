// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WealthMax Consultancy',
  description:
    'WealthMax offers specialised solutions for transmission of investments, transfer of shares, recovery of unclaimed dividends, and financial planning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        {/* Global page wrapper */}
        <main className="min-h-screen pt-24 pb-20 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
