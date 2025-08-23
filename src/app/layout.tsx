import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SWRProvider } from '../providers/swr';

const inter = Inter({ subsets: ['latin'] });

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
      url: '/images/avatar/badosz.png',
      type: 'image/png',
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SWRProvider>{children}</SWRProvider>
      </body>
    </html>
  );
}
