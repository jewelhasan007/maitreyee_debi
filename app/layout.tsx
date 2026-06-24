import type { Metadata } from 'next';
import './globals.css';
import { Geist_Mono, Ubuntu } from 'next/font/google';
import Navigation_en from './components/Navigation_en';


// Configure your font
// Add Ubuntu font
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],   // You can adjust weights
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
      <body
     className={`${ubuntu.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation_en></Navigation_en>
        {children}
      
      </body>
    </html>
  );
}
