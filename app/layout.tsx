import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import CursorGlow from '@/components/effects/CursorGlow';
import LoadingScreen from '@/components/effects/LoadingScreen';
import PageTransition from '@/components/effects/PageTransition';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';
import { LeadCaptureProvider } from '@/components/providers/LeadCaptureProvider';
import { contact, seo } from '@/lib/data';

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const display = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: '%s | Glide Education',
  },
  description: seo.defaultDescription,
  keywords: seo.defaultKeywords,
  authors: [{ name: 'Glide Education' }],
  creator: 'Glide Education',
  publisher: 'Glide Education',
  applicationName: seo.siteName,
  category: 'Education',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: seo.siteUrl,
    siteName: seo.siteName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 1200,
        alt: 'Glide Education — We Shape Your Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  verification: {
    // Add Google / Bing verification codes here once available.
    // google: '',
    // other: { 'bing': '' },
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${seo.siteUrl}/#organization`,
      name: 'Glide Education',
      alternateName: 'Glide Education Consultants',
      url: seo.siteUrl,
      logo: `${seo.siteUrl}/logo.jpg`,
      image: `${seo.siteUrl}/logo.jpg`,
      description: seo.defaultDescription,
      telephone: contact.phone,
      email: contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'C-202, Second Floor, Eastern Business District (EBD), Neptune Magnet Mall, LBS Road',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400078',
        addressCountry: 'IN',
      },
      areaServed: ['India', 'United Arab Emirates', 'United Kingdom'],
      sameAs: [contact.whatsappHref],
      knowsAbout: [
        'Medical college admission consulting',
        'Engineering college admission consulting',
        'MBA admission consulting',
        'Law college admission consulting',
        'B.Ed admission consulting',
        'Pharmacy admission consulting',
        'Online education admission',
        'Distance education admission',
        'Vocational courses',
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: contact.phone,
        contactType: 'admissions',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
        areaServed: 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${seo.siteUrl}/#website`,
      url: seo.siteUrl,
      name: seo.siteName,
      publisher: { '@id': `${seo.siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${seo.siteUrl}/admissions?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-ice text-ink antialiased">
        <LeadCaptureProvider>
          <LoadingScreen />
          <CursorGlow />
          <div className="pointer-events-none fixed inset-0 -z-10 noise-texture" />
          <Navbar />
          <PageTransition>
            <main className="relative">{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppFAB />
        </LeadCaptureProvider>

        {/* Structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
