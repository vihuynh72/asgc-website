import '../styles/globals.css';
import { Inter } from 'next/font/google';
// import { ThemeProvider } from '../components/theme/ThemeProvider';
// import { Header } from '../components/layout/ModernHeader';
// import { Footer } from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

const isProd = process.env.NODE_ENV === 'production';

export const metadata = {
  title: {
    template: '%s | ASGC',
    default: 'ASGC - Associated Students of Grossmont College',
  },
  description: 'Official website of the Associated Students of Grossmont College (ASGC). Your voice, your campus, your future.',
  keywords: ['ASGC', 'Grossmont College', 'student government', 'associated students'],
  authors: [{ name: 'ASGC' }],
  creator: 'Associated Students of Grossmont College',
  ...(isProd ? { manifest: '/manifest.webmanifest' } : {}),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asgc.edu',
    title: 'ASGC - Associated Students of Grossmont College',
    description: 'Official website of the Associated Students of Grossmont College (ASGC). Your voice, your campus, your future.',
    siteName: 'ASGC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASGC - Associated Students of Grossmont College',
    description: 'Official website of the Associated Students of Grossmont College (ASGC). Your voice, your campus, your future.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} data-gramm="false" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {process.env.NODE_ENV === 'production' && (
          <link rel="manifest" href="/site.webmanifest" />
        )}
      </head>
      <body className="min-h-screen bg-[var(--color-background)] antialiased" suppressHydrationWarning>
        {/* <ThemeProvider> */}
          <div className="relative flex min-h-screen flex-col">
            {/* <Header /> */}
            
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            
            {/* <Footer /> */}
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
