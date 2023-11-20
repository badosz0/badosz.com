import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://badosz.com/'),
  title: {
    template: 'Bartosz Król',
    default: 'Bartosz Król',
  },
  description: 'Software Engineer',
  twitter: {
    card: 'summary_large_image',
    site: 'badoosz',
    creator: '@badoosz',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: {
      template: 'Bartosz Król',
      default: 'Bartosz Król',
    },
    url: 'https://badosz.com/',
  },
  icons: [
    {
      url: '/images/avatar/badosz.png',
      type: 'image/png',
    },
  ],
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
