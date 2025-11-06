import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SWRProvider from './providers/swr';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://badosz.com/'),
  title: 'Bartosz Król',
  description: 'Software Engineer',
  twitter: {
    card: 'summary_large_image',
    site: 'badoosz',
    creator: '@badoosz',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Bartosz Król',
    description: 'Software Engineer',
    url: 'https://badosz.com/',
  },
  icons: [
    {
      url: '/avatars/badosz.png',
      type: 'image/png',
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SWRProvider>{children}</SWRProvider>
      </body>
    </html>
  );
}
