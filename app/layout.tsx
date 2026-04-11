import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { Chatbot } from '@/components/Chatbot';

export const metadata: Metadata = {
  title: 'Jency Sodvadiya — MERN Stack Developer & AI/ML Engineer',
  description:
    'Portfolio of Jency Sodvadiya, a MERN Stack Developer building scalable, intelligent, and performant web applications. Passionate about AI/ML and modern web tech.',
  keywords: [
    'Jency Sodvadiya',
    'Jency',
    'Sodvadiya',
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Software Engineer India',
    'AI/ML Engineer Portfolio',
    'Next.js Portfolio',
    'Machine Learning',
    'Web Development'
  ],
  authors: [{ name: 'Jency Sodvadiya' }],
  creator: 'Jency Sodvadiya',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://portfolio-seven-snowy-hy6qll95c8.vercel.app/', // Placeholder URL
    title: 'Jency Sodvadiya — MERN Stack Developer',
    description: 'Explore the portfolio of Jency Sodvadiya, highlighting projects in MERN stack and AI/ML.',
    siteName: 'Jency Sodvadiya Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jency Sodvadiya — MERN Stack Developer',
    description: 'Explore the portfolio of Jency Sodvadiya, highlighting projects in MERN stack and AI/ML.',
    creator: '@Jencyy'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
