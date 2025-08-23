import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://badosz.com/dankdle'),
  title: 'Dankdle',
  description: 'Guess the item!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Dankdle',
    description: 'Guess the item!',
    url: 'https://badosz.com/dankdle',
  },
  icons: [
    {
      url: '/images/logos/memer.webp',
      type: 'image/png',
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return <>{children}</>;
}
