import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bhavana Choudhary | Computer Science Engineer Portfolio',
  description: 'Professional recruiter-facing portfolio of Bhavana Choudhary — Computer Science Engineering student specializing in Software Development, Data Analysis, AI/ML, and Cybersecurity.',
  keywords: ['Bhavana Choudhary', 'Computer Science Engineer', 'AI', 'Cybersecurity', 'Software Engineer', 'Portfolio', 'Bangalore'],
  authors: [{ name: 'Bhavana Choudhary' }],
  openGraph: {
    title: 'Bhavana Choudhary | Computer Science Engineer',
    description: 'Building practical solutions across software, data, AI, and cybersecurity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0A0F] text-white antialiased selection:bg-[#C8FF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
