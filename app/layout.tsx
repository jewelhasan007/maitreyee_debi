import type { Metadata } from 'next';
import './globals.css';
import { Geist_Mono, Ubuntu } from 'next/font/google';
import Navigation_en from './components/Navigation_en';

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'মৈত্রেয়ী দেবী | Maitreyee Debi',
  description: 'Portfolio of Maitreyee Debi - Artist, Author, and Cultural Preservationist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${ubuntu.variable} ${geistMono.variable} antialiased`}>
        
        {/* Global Watermark - First child so it's behind everything */}
        <div 
          className="fixed inset-0 pointer-events-none -z-10"
          style={{
            backgroundImage: `url('/images/watermark/watermark3.jpg')`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: '260px',
            opacity: 0.08,
            filter: 'grayscale(100%) brightness(1.5)',
          }}
        />

        <Navigation_en />
        {children}
      
      </body>
    </html>
  );
}