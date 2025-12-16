import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming',
  description: 'Quick view of upcoming movies, games and shows.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Upcoming',
    description: 'Quick view of upcoming movies, games and shows.',
    url: 'https://badosz.com/upcoming',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
