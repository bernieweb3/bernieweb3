import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BernieWeb3 — Web3 Infrastructure Builder',
  description: 'Building coordination systems on Sui. Infrastructure & tooling for object-centric DeFi, AI systems, and incentive-driven architecture.',
  openGraph: {
    title: 'BernieWeb3 — Web3 Infrastructure Builder',
    description: 'Building coordination systems on Sui.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=1200&h=630&fit=crop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BernieWeb3 — Web3 Infrastructure Builder',
    description: 'Building coordination systems on Sui.',
    images: [
      'https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=1200&h=630&fit=crop',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
