import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.example.com'),
  title: { default: 'Priyansu Kumar — Data Analyst', template: '%s | Priyansu Kumar' },
  description: 'Priyansu Kumar is a computer science graduate and fresher focused on data analytics and business insights.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Priyansu Kumar — Data Analyst', description: 'Data analytics portfolio.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Priyansu Kumar — Data Analyst', description: 'Data analytics portfolio.' },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
