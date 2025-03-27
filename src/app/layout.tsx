import type { Metadata } from 'next';
import './globals.css';
import { volkhov, poppins, jost } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FASCO | Modern Online Shopping Experience',
  description: 'Discover a wide range of products with our easy-to-use shopping platform. Enjoy secure checkout, fast delivery, and excellent customer service.',
  keywords: ['fashion', 'online shopping', 'ecommerce', 'clothing', 'accessories'],
  authors: [{ name: 'FASCO Store' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'FASCO | Modern Online Shopping Experience',
    description: 'Discover a wide range of products with our easy-to-use shopping platform.',
    url: 'https://fasco-sabry-store.vercel.app/',
    siteName: 'FASCO Store',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://fasco-sabry-store.vercel.app/logo.svg',
        width: 800,
        height: 600,
        alt: 'FASCO Store Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FASCO | Modern Online Shopping Experience',
    description: 'Discover a wide range of products with our easy-to-use shopping platform.',
    images: ['https://fasco-sabry-store.vercel.app/logo.svg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} ${jost.variable}   flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <div className='flex-1 container'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
