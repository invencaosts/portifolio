import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteUrl = 'https://invencaodev.com';
const siteTitle = 'Guilherme da Invenção | Desenvolvedor Full Stack';
const siteDescription =
  'Desenvolvedor Full Stack Júnior em Aracaju, com experiência em TypeScript, React, Next.js, Node.js, AdonisJS e PostgreSQL aplicada a sistemas de saúde, gestão e geodados.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | invencaodev',
  },
  description: siteDescription,
  keywords: [
    'Guilherme da Invenção',
    'desenvolvedor full stack',
    'desenvolvedor júnior',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Web GIS',
    'portfólio dev Aracaju',
    'WM Saúde',
  ],
  authors: [{ name: 'Guilherme da Invenção', url: siteUrl }],
  creator: 'Guilherme da Invenção',
  publisher: 'Guilherme da Invenção',
  category: 'technology',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt-BR': siteUrl,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'invencaodev',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Guilherme da Invenção — Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
  other: {
    'material-symbols':
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Guilherme da Invenção',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: 'Desenvolvedor Full Stack',
  email: 'mailto:gui.inven@gmail.com',
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aracaju',
    addressRegion: 'SE',
    addressCountry: 'BR',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'WM Saúde - Gestão e Tecnologia',
  },
  knowsAbout: [
    'TypeScript',
    'Next.js',
    'Node.js',
    'React',
    'AdonisJS',
    'PostgreSQL',
    'Docker',
    'APIs REST',
    'Web GIS',
    'Sistemas de saúde',
  ],
  sameAs: ['https://github.com/invencaosts', 'https://linkedin.com/in/invencaosts/'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#f2f0ea" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0c0c0e" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
