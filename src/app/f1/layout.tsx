import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'F1',
  description: 'Quick F1 calendar and driver standings.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'F1',
    description: 'Quick F1 calendar and driver standings.',
    url: 'https://badosz.com/f1',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
